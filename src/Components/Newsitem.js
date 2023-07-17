import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className='my-3 d-flex justify-content-around'>
        <div className="card" style={{width :"18rem",justifyContent:'space-evenly'}}>
            <img src={imageurl?imageurl:"https://media.istockphoto.com/id/1412329492/photo/3d-newspaper-with-green-paper-money-and-gold-coin-financial-news-newspaper-with-world-economy.webp?b=1&s=170667a&w=0&k=20&c=2QJTonYZmRcWjsIXBebO2cqvjaYzvgI2_mshBLPBi1g="}  className="card-img-top" alt="..."/>
            <span class="position-absolute top-0 translate-middle badge rounded-pill badge text-bg-warning" style={{zIndex:1,left:"85%"}}>
            {source}
            </span>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p class="card-text"><small class="text-body-secondary">updated by {author?author:"unknown"} at {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
