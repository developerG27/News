import React, { Component } from 'react';
import Header from './components/Header';
import Notizie from './components/Notizie';

class App extends Component {

  state = {
    notizie : []
  }

  componentDidMount(){
    this.consultareNotizie();
  }
  consultareNotizie = () => {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-11&sortBy=publishedAt&apiKey=eb10258121314635876caad77ca78b61`;
    // console.log(url)

    fetch(url)
      .then(risposta => {
        return risposta.json();
      })
      .then(notizie => {
        this.setState({
          notizie : notizie.articles
        })
      })
  }

  render() {
    return (
      <div>
        <Header 
          titolo = "Notizie"
        />

        <Notizie 
          notizie = {this.state.notizie}
        />
      </div>
    );
  }
}

export default App;
