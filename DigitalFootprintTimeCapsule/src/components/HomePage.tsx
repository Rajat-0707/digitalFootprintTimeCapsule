import { Link } from 'react-router-dom';
import '../css/homepage.css';

function HomePage() {
    return (
        <div className="mainPage-container">
            <h1>Digital Footprint Time Capsule</h1>
            <p>Store your digital memories for future yourself and generations.</p>
            <Link to='/login'> 
            <button>
                <span>Get Started</span>
                </button></Link>
           
        </div>
    );
}

export default HomePage;