import React from 'react'

 const News = (props) => {
  return (
    <div className='news'>
        <div className='news-img'>
          {
            props.article.urlToImage!==null?
            <img src={props.article.urlToImage} alt=''/>:
            <img src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg" alt=''/>
          }
            
        </div>
        <h1>{props.article.title}</h1>
        <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target='_blank' rel="noreferrer">Read more...</a></p>
        <div className='source'> 
            <p> Author:{props.article.author}</p>
            <p>{props.article.source.name}</p> 
        </div>
         
    </div>
  )
}
export default News;
