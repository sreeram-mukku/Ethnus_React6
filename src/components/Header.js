import React from 'react';
import avatar from './images/IMG-20220325-WA0043.jpg'; 

const Header = () => {
  return (
    <header>
      <img src={avatar} alt="Avatar" className="avatar" />
      <h1 style={{fontFamily:'initial'}}>Sreeram Mukku</h1>
      
      <p>
        <span className="webDeveloper">Web Developer</span>
      </p>

      <h4 style={{color:'white'}}>
        As a web developer, I embark on a journey of constant learning and innovation in the ever-evolving digital landscape. It's a realm where creativity converges with logic, where lines of code translate into seamless user experiences. From crafting visually captivating interfaces to ensuring robust functionality, I thrive on the dynamic challenges of the web. The satisfaction of seeing ideas manifest in pixels and code is what fuels my passion. I am committed to building not just websites, but gateways to meaningful interactions and connections. In this fast-paced digital age, I stand at the forefront, driven to deliver cutting-edge solutions that leave a mark in the virtual world.
      </h4>
    </header>
  );
}

export default Header;