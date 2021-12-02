import React, { useState,useEffect } from 'react'
import Loading from './Loading';
import Newscards from './Newscards'
import InfiniteScroll from "react-infinite-scroll-component";




  
const Display=(props)=> {

  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)

  const [loading, setloading] = useState(true)
   

      

       const fetchMoreData = async() => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs

        setpage(page+1);
        let urL=`https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=64f33535f8b748fe997ab43ef8ea0333&page=${page}&pageSize=6`;
        let response= await fetch(urL);
       let data=await response.json();
        
       setTimeout(() => {
        // setState({
        //   articles: state.articles.concat(data.articles)
        // });
        setarticles(articles.concat(data.articles));
        
      }, 500);
      
      };
     

 const update=async ()=>{
  let urL=`https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=64f33535f8b748fe997ab43ef8ea0333&page=${page}&pageSize=6`;
        let response= await fetch(urL);
       let data=await response.json();

     
      // setState({articles:data.articles,loading:false});
       setarticles(data.articles);
       setloading(false);
}
useEffect(() => {
  update();
  document.title=`News-${props.cat}`;
 
  
}, [])
  

    
        return (
            < div className="container my-3 center-text">
                <h2>Headlines</h2>
               
          {loading&&<Loading/>}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={true}
          
        >
          <div className="container">

<div className="row">

              {articles.map(function(element){
                return   <div className="col-md-4" key={element.url}>
                <Newscards title={element.title} desc={element.description?element.description.slice(0,70)+"...":""} img={element.urlToImage?element.urlToImage:"https://cdn.vox-cdn.com/thumbor/ovwkYq-4urfzMPVZOd0BvRRB8Xs=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22850524/9th_Gen_iPad_Press_Image.jpeg"} link={element.url} alt=""/>
                </div>
              })
            }
        </div>
            </div>
         </InfiniteScroll>
         </div>
        
               
          
          
        )
    
}

export default Display
