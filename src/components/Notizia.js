import React from 'react';
const Notizia = (props) => {
  const {urlToImage, url, title, description, source} = props.notizia;

  console.log(urlToImage);


  return(
    <div>
      <p>Da notizia</p>
    </div>
  )  
}
export default Notizia;