// import React, { Component } from 'react'
// import NewsItems from './NewsItems'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static propTypes = {
//     country: PropTypes.string,
//     category:PropTypes.string
//   }
//    capitalizeFirstLetter = (string)=>{
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
 
//     constructor(props){
//         super(props);
//         this.state = {
//             articles: [],
//             loading:false,
//             page:1,
//             totalResults:0
//         }
//         document.title = `NewsBytes - ${this.capitalizeFirstLetter(this.props.category)}`
//     }
//     async updateNews(){
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=432c8b77277c4c3f902b88850c279f80&page=${this.state.page}&pageSize=12`;
//         let data = await fetch(url);
//         let parsedData =  await data.json(); 
//         this.setState({articles:parsedData.articles,
//                       totalResult:parsedData.totalResults,
//                       loading:false})
//     }
//     async componentDidMount(){
//        await this.updateNews();
//     }
  
//     fetchMoreData =  async ()=>{
//         this.setState({page:++this.state.page})
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=432c8b77277c4c3f902b88850c279f80&page=${this.state.page}&pageSize=12`;
//         let data = await fetch(url);
//         let parsedData =  await data.json(); 
//         this.setState({
//                         articles:this.state.articles.concat(parsedData.articles),
//                         totalResults:parsedData.totalResults
//         })
//     };
//   render() {
//     return (
//       <>
//         <h1 className='text-center my-5' style={{ margin: '35px 0px' }}>NewsBytes - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
//         {this.state.loading && <Spinner/>}
//         <InfiniteScroll 
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//         <div className="container">
//         <div className="row">
//             {this.state.articles.map((element)=>{
//                 return <div className="col-md-3 my-3" key={element.url}>
//                 <NewsItems title={!element.title?"":element.title.slice(0,53)} source={element.source.name} descreption={!element.description?"":element.description.slice(0,100)} imgURL={element.urlToImage} author={!element.author?"Unknown":element.author} time={element.publishedAt} newsURL={element.url}/>
//                 </div>
//             })}
//         </div>
//         </div>
//         </InfiniteScroll>
//       </>
//     )
//   }
// }
// export default News
