import React, { Component } from "react";
import Newsitem from "./Newsitem";
export class Global extends Component {
  constructor() {
    super();
    console.log("Hello I am a consructer from  Global component");
    this.state = {
      articales: [],
      loading:false,
      page:1,
      dis:1
    };
  }
  
  static defaultProps={
    country:'in',
    category:"sports",
    headline:""
  }
  async componentDidMount(){
    document.title =`${this.props.headline.slice(2,)}-Khabar Dekho`;
    let url=`https://newsapi.org/v2/everything?q=global&apiKey=a773db3d9f8a499e9ac17d03a8790c48&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articales: parsedData.articles,totalResults:parsedData.totalResults});
  }

  handlePrevclick =async()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/everything?q=global&apiKey=a773db3d9f8a499e9ac17d03a8790c48&page=${this.state.page -1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articales: parsedData.articles,
      page:this.state.page-1,
      dis:1
    });
  }
  handleNextclick = async()=>{
    let url=`https://newsapi.org/v2/everything?q=global&apiKey=a773db3d9f8a499e9ac17d03a8790c48&page=${this.state.page +1}&pagesize=20`;
    if (this.state.page+1>Math.ceil(this.state.totalResults/20)){
        this.setState(
          {dis:0}
        );
    }
    else{
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articales: parsedData.articles,
        page:this.state.page+1
    });
    }
    
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className={`d-flex justify-content-around mt-2 mb-2 text-${this.props.mode==="light"?"dark":"light"}`}>Top Headlines {this.props.headline}</h2>
        <div className="row">
        {this.state.articales.map((element)=>{
          return <div className="col md-4" key={element.url} >
            <Newsitem title={element.title? element.title.slice(0,45):" "} description={element.description? element.description.slice(0,88):" "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class={`btn btn-${this.props.mode==="light"?"dark":"light"}`} onClick={this.handlePrevclick}>&larr; Previous</button>
        <button disabled={this.state.dis===0} type="button" class={`btn btn-${this.props.mode==="light"?"dark":"light"}`} onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default Global;
