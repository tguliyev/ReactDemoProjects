import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page />
);

function Page() {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}