import { useState, useEffect } from 'react';
import './App.css';
import News from './News';

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(()=> {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-08-30&apiKey=7af293154a7a46aeb929b9e31940adbf`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
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
