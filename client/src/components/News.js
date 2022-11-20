import React,{useState} from 'react';
import axios from 'axios';
function News() {
  const [data,setData] =useState([])
  const getNews = () =>{
      axios.get(" https://newsapi.org/v2/top-headlines?country=us&apiKey=cf684a9ca6a54b6f8881c31d56462581")
      .then((response) => {
        //console.log(response);
        setData(response.data.articles)
      })
  }
  return (
    <>
    <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews}>Fetch News</button>
    </div>
    <div className='container'>
      <div className='row'>
        {
          data.map((value)=>{
            return(
              <div className='col-3'>
              <div className='card' style={{width: "18rem"}}>
                <img src={value.urlToImage} className='card-img-top' alt="..."/>
                <div className='card-body'>
                  <h5 className='card-title'>{value.title}</h5>
                  <p className='card-text'>{value.description}</p>
                  <a href={value.url} class="btn btn-primary" target="_blank">Know More!</a>
                </div>
              </div>
            </div>
            );

          })
        }
        
      </div>
    </div>
    </>
  );
}

export default News;