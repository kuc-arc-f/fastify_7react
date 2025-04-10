import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ClientChild from './client/clientChild';
console.log("#client.tsx2");
//
function Page(){
  return(
  <div>
    hoge!!!</div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*

<Page />
  <React.StrictMode>
    <ClientChild />
  </React.StrictMode>
<Head />
  return(<div>hoge!!!</div>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
*/
