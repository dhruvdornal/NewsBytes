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




import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        //props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=12`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News

