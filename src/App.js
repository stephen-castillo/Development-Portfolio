import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HEADER from './components/header/header';
import ABOUT from './components/aboutme/aboutme';
import PORTFOLIO from './components/portfolio/portfolio';
import CONTACT from './components/contact/contact';
import RESUME from './components/resume/resume';
import FOOTER from './components/footer/footer';

function App() {
    const [currentPage, setCurrentPage] = useState("About");

    const RenderPage = () => {
        switch (currentPage) {
        case "About":
        default:
            return <ABOUT />;
        case "Portfolio":
            return <PORTFOLIO />;
        case "Contact":
            return <CONTACT />;
        case "Resume":
            return <RESUME />;
        }
    };

    return (
        <div className="App">
            <HEADER setCurrentPage={setCurrentPage}/>
                <RenderPage />
            <FOOTER />
        </div>
    );
}

export default App;
