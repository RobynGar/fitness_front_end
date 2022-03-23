import React from "react";
import homePic from './assets/homePic.jpeg';
import longHomePic from './assets/longHomePic.jpeg'
import transparentHomePic from './assets/transparentHomePic.png'
import middleButToTheRightABitHomePic from './assets/middleButToTheRightABitHomePic.png'
import bowlHomePic from './assets/bowlHomePic.png';
import strawberryHomePic from './assets/strawberryHomePic.png';


const Home = () => {

    return(
        <>  
            <div id="container">
                <div id="text-container">
                    <h2>Welcome to Not My Fitness Pal! </h2>
                    <p id="home-para">Here at Not My Fitness Pal, we know how hard it is to make healthy food choices a priority in our busy lives. Our aim is to help you make concious food decisions without any hassle.</p>
                </div>
                <img className="home-pic grow" src={bowlHomePic} />
            </div>
            <section id="inspiration">
                <h3 >Stories</h3>
            </section>
        </>
    )
}
export default Home;