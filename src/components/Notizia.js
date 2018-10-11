import React from 'react';
const Notizia = (props) => {
  const {urlToImage, url, title, description, source, author, content, publishedAt} = props.notizia;

  console.log(urlToImage);


  return(
    <div class="articolo">
      <div>
        <img src={urlToImage} alt={title} />
        <p class="titolo">{title}</p>
        <p class="author"> {author}</p>
        <p class="description">{description}</p>
        <a href={url} target="_blank"> <p>Questo è il link</p> </a>
        <p class="content">{content}</p>
        <span class="web">{source.name}</span>
        <p class="pubblicazione">Pubblicato il giorno {publishedAt}</p>
      </div>
    </div>
  )  
}
export default Notizia;