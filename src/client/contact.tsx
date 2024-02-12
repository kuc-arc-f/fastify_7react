import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Head from '../components/Head'
console.log("#client.contact.tsx");
//
function Page(){
  return(
  <div>
    <Head />
    <hr />
    <h1>client/contact</h1>
  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
<a href="/">Home</a>
*/