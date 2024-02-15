import React from 'react';
import Navbar from '../../Components/Nav/Nav';

const Home = () => {
    return (
        <div>
            <Navbar showLoginButton={false} /> 
            <div>Home Content</div> 
        </div>
    );
};

export default Home;