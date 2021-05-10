import './App.css';
import { GlobalStyle } from './GlobalStyles'
import { Header } from './components/header'
import { Row } from './components/row'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from './components/AppContext';


const peek_date = (created_at) => {
  const now = new Date()
  if (now.getDate() === created_at.getDate()) {
    const timeSplitted = created_at.toLocaleTimeString().split(':')
    return timeSplitted[0] + ':' + timeSplitted[1] + ' ' + timeSplitted[2].split(' ')[1].toLocaleLowerCase()
  }
  if (now.getDate() - 1 === created_at.getDate()) {
    return 'Yesterday'
  }
  const timeSplitted = created_at.toDateString().split(' ')
  return timeSplitted[1] + ' ' + timeSplitted[2]
}

const renderFeed = (feed, deleted) => {
  const items = []
  for (const [, value] of feed.entries()) {
    const title = value.title || value.story_title
    const author = value.author
    const url = value.url || value.story_url
    const date_time = peek_date(new Date (value.createdAt))
    if (!deleted.includes(value.createdAt)) {
      items.push(
          <div>
            <Row 
            title={ title }
            url = { url }
            author={ author }
            date_time= { date_time }
            id = { value.createdAt }
            />
            <hr />
          </div> 
        )
    }
  }
  return items
}



function App() {
  const [feed, setFeed] = useState([])
  const [deleted, updateDeleted] = useState([])
  useEffect(() => {
    axios.get('http://localhost:7000/blog')
    .then( response => setFeed(response.data) )
  }, [])

  useEffect(() => {
    updateDeleted( JSON.parse(localStorage.getItem("deleted")) || [])
  }, [])
  const items= renderFeed(feed, deleted)
  
  const globalValues = {
    deleted_posts: deleted,
    updateDeleted,
    add_deleted : (deleted, new_deleted) => {
      deleted.push(new_deleted)
      localStorage.setItem("deleted", JSON.stringify(deleted))
      updateDeleted(deleted)
    }
  }
  

  return (
    <AppContext.Provider value= { globalValues }>
      <Header />
      <section>
        { items }
      </section>
      
      <GlobalStyle />
    </AppContext.Provider>
  );
}

export default App;
