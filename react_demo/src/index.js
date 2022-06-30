import React from 'react'
import ReactDOM from 'react-dom/client'
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

function Header() {
    return (
        <header>
            <nav className='navigation'>
                <img src="logo192.png" alt="logo" />
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Content() {
    return (
        <div>
            <h1>Fun facts aboud React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintaned by Facebook</li>
                <li>Powers thousands of enterprice apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer><small>&copy; 2022 Guliyev development. All rights reserved.</small></footer>
    )
}

// function Fact() {
//     return (
//         <div>
//             <img src='logo192.png' alt="logo"/>
//             <h1></h1>
//             
//         </div>
//     )
// }