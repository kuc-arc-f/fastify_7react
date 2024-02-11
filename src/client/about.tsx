import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
console.log("#client.about.tsx");
//
function Page(){
  return(
  <div>
    <a href="/">Home</a>
    <hr />
    <h1>client/about.txt</h1>
  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
*/