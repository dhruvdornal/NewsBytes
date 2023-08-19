// import React, { Component } from 'react'

// export class NewsItems extends Component {
//   render() {
//     let {title, descreption, imgURL, newsURL, author, time, source} = this.props
//     return (
//       <>
//     <div className='container my-1'>
//         <div className="card" style={{width: "18rem;"}}>
//         <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}} >
//                                                     {source}
//                                                      <span class="visually-hidden">unread messages</span>
//                                                      </span>
//         <img className="card-img-top" src={!imgURL?"https://i.pinimg.com/originals/28/43/4a/28434adf8173796d6b3b932c928a1edf.jpg":imgURL} alt="Card image cap"/>
//         <div className="card-body">
//         <h5 className="card-title">{title}...</h5>
//         <p className="card-text">{descreption}...</p>
//         <p>By {author} on {new Date(time).toGMTString()}</p>
//         <a href={newsURL} target="_blank" className="btn btn-dark">Read More</a>
//         </div>
//         </div>
// </div>
// </>
//     )
//   }
// }

// export default NewsItems


import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://i.pinimg.com/originals/28/43/4a/28434adf8173796d6b3b932c928a1edf.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem