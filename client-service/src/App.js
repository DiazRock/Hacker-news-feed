import './App.css';
import { GlobalStyle } from './GlobalStyles'
import { Header } from './components/header'
import { Row } from './components/row'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const renderFeed = (feed) => {
  const items = []
  for (const [, value] of feed.entries()) {
    const title = value.title ? value.title: value.story_title
    const author = value.author
    const url = value.story_url ? value.story_url: value.url 
    const date = value.createdAt
    items.push(
      <div>
        <Row 
        title={ title }
        url = { url }
        author={ author }
        date_time= 'Prueba'
        />
        <hr />
      </div> 
    )
  }
  return items
}

function App() {
  const [feed, setFeed] = useState([])
  useEffect(() => {
    axios.get('http://localhost:7000/blog')
    .then( response => setFeed(response.data) )
  }, [])

  const items= renderFeed(feed)

  return (
    <div>
      <Header />
      <section>
        { items }
      </section>
      
      <GlobalStyle />
    </div>
  );
}

export default App;
