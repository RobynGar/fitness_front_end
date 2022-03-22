import React from "react";
import homePic from './assets/homePic.jpeg';


const Home = () => {

    return(
        <>
            <h1>Home Page</h1>
            <h2>Welcome to Not My Fitness Pal! </h2>
            <p>Here at Not My Fitness Pal, we know how hard it is to make healthy food choices a priority in our busy lives. Our aim is to help you make concious food decisions without any hassle</p>
            <img src={homePic} />
        </>
    )
}
export default Home;