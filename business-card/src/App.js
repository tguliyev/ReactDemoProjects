import React from "react";
import Photo from "./images/photo.png";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="card">
            <img src={Photo} />
            <Header />
            <Content />
            <Footer /> 
        </div>
    )
}