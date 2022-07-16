import React from "react";
import TuralImage from "./images/tural.jpg";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="card">
            <img src={TuralImage} />
            <Header />
            <Content />
            <Footer /> 
        </div>
    )
}