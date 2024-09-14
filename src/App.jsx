import { useState, useEffect } from 'react';
import './App.css';
import News from './News';

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(()=> {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-09-12&apiKey=7af293154a7a46aeb929b9e31940adbf`)
    .then((response)=>{
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.json}`);
      }
      return response.json();
    })
    .then((news)=>{
      if(news){
        setArticles(news.articles);
        console.log(news.articles); 
      }else{
        console.error('Received undefined or empty data');
      }
    })
    .catch((err)=>{
      console.log('Error fetching data:', err);
    })
  }, [category])

  return (
     <div className="App">
    
    <header className='header'>
    <h1>WorldWideNews</h1>
    <input type='text' onChange={(event)=>{
      if(event.target.value!==''){
        setCategory(event.target.value);
      }
      else{
        setCategory("india");
      }
    }} placeholder='Search News..'/>

    </header>

<section className='news-articles'>
{
  articles.length!==0?
  articles.map((article)=>{
    return(
      <News article={article}/>
    )
  })
  :
  <h3> No news found for searched text</h3>
}
    </section>

  </div> 
  );
}

export default App;
