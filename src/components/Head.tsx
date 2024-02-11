//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <a href="/">Home</a>
        <a href="/about">&nbsp; [ about ]</a>
        <a href="/contact">&nbsp; [ contact ]</a>
        <hr />
    </div>
    );
}
export default Page;
/*
<Link to="/">Home</Link>
<Link to="/about">&nbsp; [ about ]</Link>
<Link to="/contact">&nbsp; [ contact ]</Link>
*/