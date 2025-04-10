import {Link } from 'react-router-dom';

function Page() {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/about" className="ms-2">[ About ]</a>
        <a href="/page2" className="ms-2">[ page2 ]</a>
        <a href="/page3" className="ms-2">[ page3 ]</a>
        <hr />
    </div>
    );
}
export default Page;
