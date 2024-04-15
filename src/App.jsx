import {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Components/Nav.jsx';
import Card from './Components/Card';


function App() {
  const [newsData, setNewsData] = useState([]);
  const [query, setQuery] = useState("India");
  const list = ["Cricket", "Buisness", "Bollywood", "Technology"];
  const API_KEY = "a64d07b5f2c24236ad9f0920a8828774";
  const url = "https://newsapi.org/v2/everything?q=";
  async function fetchNews(query) {
    const res = await axios.get(`${url}${query}&apiKey=${API_KEY}`);
    setNewsData(res.data.articles);
  }
  const onClickNav=(items)=>{
    if(items==="Home")
    setQuery("India");
    else
    setQuery(items.target.innerText);
  }
  const onSearch=(event)=>{
    // setQuery(event.)
    if(event.key==="Enter")
    setQuery(event.target.value);
  }
  useEffect(() => {
    fetchNews(query);
  },[query])
  return (
    <>
      <Nav list={list} onClickNav={onClickNav} onSearch={onSearch}></Nav>
      <div className="cards-container">
      {newsData.map((item, index) =>{
          if(item.urlToImage===null) return
          else
           return<Card key={index} newsUrl={item.url}imgsrc={item.urlToImage} newsTitle={item.title} newsSource={item.source.name} newsDesc={item.description}></Card>}
          )}
      </div>
    </>
  )
}

export default App
