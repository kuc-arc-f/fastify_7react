import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Head from '../components/Head'
//
function Home() {
    return (
    <div className="container mx-auto my-2 px-8 bg-white">
        <Head />
        <h1 className="text-4xl text-gray-700 font-bold my-2"
        >Home</h1>
    </div>
    )
}
export default Home;

ReactDOM.createRoot(document.getElementById('root')!).render(
 <Home />
)
