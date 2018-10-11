import React, { Component } from 'react';
import Notizia from './Notizia';

class Notizie extends Component {
  render() { 
    return ( 
      <div>
        {this.props.notizie.map(notizia => (
          <Notizia
            notizia = {notizia}
          />
        ))}
      </div>
     )
  }
}
 
export default Notizie;