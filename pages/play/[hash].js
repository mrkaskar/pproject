import { useEffect } from 'react';
import actress from '../../data/actress.json';

export default function Hash({name, code, photo, url}){

  useEffect(()=>{
  window.history.pushState("object or string", "Title", `/${name}/${code}`);
  },[]);
  
  return <div id="main">
    <h1 id="name">{name}</h1>
    <h3 id="code">{code}</h3>
    <img id="photo" src={photo}/>
    <div id="video">
    <iframe 
      id="frame"
      src={url} 
      frameBorder={0}
      marginWidth={0}
      marginHeight={0}
      scrolling="NO"
      allowFullScreen
    /> 
      
    </div>
    
  </div>
}

export async function getStaticProps(context) {
  const hash =  context.params.hash;
  const obj = actress.find(act => Object.keys(act)[3] === hash);
  const video = obj[hash];
  const name= obj["name"];
  const photo = obj["photo"];
  const code = obj["code"];
  return {
    props: {
      name, 
      code,
      photo,
      url: video}, 
  }
}

export async function getStaticPaths() {
  const paths = actress.map(act => {
    return { params: { 'hash':  Object.keys(act)[3]} }
  })
  return {
    paths,
    fallback:false,
  };
}