import React from 'react';
import './Home.css';
import KhalidElgazzar from '../Images/Khalid-Elgazzar.jpg';

const Home = () => {
    return (
        <div className="content-container"> {/* Flex container */}
        <div className="Title">
            <h1>Dr. Khalid Elgazzar</h1>
            <h3>Computer Science Professor & CRC</h3>
          </div>
          <div className="main-content">
                <img src={KhalidElgazzar} alt="A picture of Dr. Khalid Elgazzar" />
                <p>I am an Assistant Professor at The Center of Advanced Computer Studies, University of Louisiana at Lafayette. I am also an adjunct assistant professor at Queen's School of Computing. I received my PhD from Queen's University in 2013. I have 8+ years of industrial experience in software development and networking desgin, and 9+ years of interdisciplinary academic teaching and research. My research interests span the areas of mobile and ubiquitous computing, distributed systems, context-aware cyber-physical systems, and elastic networking paradigms to cope with dynamic applications. My current research focus is on novel Ubiquitous Cloud paradigms and Internet of Things (IoT). Google Scholar Index.</p>
          </div>
        
        </div>
      );
}
 
export default Home;


