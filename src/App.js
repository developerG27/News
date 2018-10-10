import React, { Component } from 'react';

class App extends Component {

  state = {
    notizie : []
  }

  componentDidMount(){
    this.consulareNotizie();
  }
  consulareNotizie = () => {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-10&sortBy=publishedAt&apiKey=eb10258121314635876caad77ca78b61`;
    // console.log(url)

    fetch(url)
      .then(risposta => {
        return risposta.json();
      })
      .then(notizie => {
        this.setState({
          notizie: notizie.articles
        })
      })
  }



  render() {
    return (
      <div>
        <h1>Ciao</h1>
      </div>
    );
  }
}

export default App;
