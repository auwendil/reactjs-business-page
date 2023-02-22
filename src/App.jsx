import React, {useState} from 'react';
import './App.scss';
import {Helmet} from 'react-helmet';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Preview COMPANY page</title>

                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"/>
            </Helmet>

            <Navigation></Navigation>
            <Header/>
            <Main/>

            <Footer/>
        </div>
    );
}

export default App;
