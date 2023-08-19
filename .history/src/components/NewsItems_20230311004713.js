import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, descreption, imgURL, newsURL, author, time, source} = this.props
    return (
      <>
    <div className='container my-1'>
        <div className="card" style={{width: "18rem;"}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}} >
                                                    {source}
                                                     <span class="visually-hidden">unread messages</span>
                                                     </span>
        <img className="card-img-top" src={!imgURL?"https://i.pinimg.com/originals/28/43/4a/28434adf8173796d6b3b932c928a1edf.jpg":imgURL} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{descreption}...</p>
        <p>By {author} on {new Date(time).toGMTString()}</p>
        <a href={newsURL} target="_blank" className="btn btn-dark">Read More</a>
        </div>
        </div>
</div>
</>
    )
  }
}

export default NewsItems
