import React, { Component } from 'react';


class Form extends Component {
  render() { 
    return ( 
      <div>
        <h3>Categoria Notizie</h3>
        <select name="" id="">
          <option value="business">Business</option>
          <option value="entertainment">Intrattenimento</option>
          <option value="general">Generale</option>
          <option value="health">Salute</option>
          <option value="science">Scienza</option>
          <option value="sports">Sport</option>
          <option value="technology">Tecnologia</option>
        </select>
      </div>
     )
  }
}
 
export default Form;