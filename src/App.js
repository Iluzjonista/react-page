import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/module/Navigation'
import Header from './components/section/Header'
import About from './components/section/About'
import Footer from './components/section/Footer'
import React from "react";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Header/>
            <Header/>
            <About/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
