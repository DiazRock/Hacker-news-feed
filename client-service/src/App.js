import './App.css';
import { GlobalStyle } from './GlobalStyles'
import { Header } from './components/header'
import { Row } from './components/row'
import { post_fetcher } from './api_requester/post_fetcher'



function App() {
  const feed = post_fetcher()
  return (
    <div>
      <Header />
      <section>
        <Row 
          title="HN Feed pablito clavo un clavito" 
          author="Lindoro"
          date_time="La cosa por acá"

        />
      </section>
      
      <hr />
      <GlobalStyle />
    </div>
  );
}

export default App;
