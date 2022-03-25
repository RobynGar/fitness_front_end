import React, { useState } from "react";
import homePic from './assets/homePic.jpeg';
import longHomePic from './assets/longHomePic.jpeg'
import transparentHomePic from './assets/transparentHomePic.png'
import middleButToTheRightABitHomePic from './assets/middleButToTheRightABitHomePic.png'
import bowlHomePic from './assets/bowlHomePic.png';
import strawberryHomePic from './assets/strawberryHomePic.png';
import familyManPic from './assets/family_man.jpeg'
import fitnessGirlPic from './assets/fitness_girl.jpeg'
import Story from "./components/Story";


const Home = () => {

    const [stories,setStories] = useState([
        {
            name: "John Doe",
            text: `I had always been active and sporty, all through childhood and into my mid-twenties. As my late twenties became 
            my early thirties,  my career and starting my own family took precedence in my life. I had no time to do all the things 
            I used to love. Bad eating habits and a sedentary lifestyle meant I slowly packed on the pounds without noticing. Now 34, 
            I have decided to take back control. The ability to precisely track everything I eat has made reaching my goals a piece 
            of cake! Better yet, I don’t have to limit what I eat, just how much I’m eating.`,
            picture: familyManPic
        },
        {
            name: "Jane Doe",
            text: `As a self-proclaimed fitness nerd, health and general wellness has always been important to me. People always ask 
            me how I do it. In this world of Deliveroo and UberEats, it’s so easy to fall into bad habits. With Not My Fitness Pal, 
            I have access to hundreds of delicious, quick and easy meals for all meal types! Who needs overpriced delivery services now?!`,
            picture: fitnessGirlPic
        }
    ])

    const [currentStoryIndex,setCurrentStoryIndex] = useState(0);

    const handleNextButtonClick = () => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1)
        } else if (currentStoryIndex === stories.length - 1) {
            setCurrentStoryIndex(0)
        }
    }

    const handlePreviousButtonClick = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1)
        } else if (currentStoryIndex === 0) {
            setCurrentStoryIndex(stories.length - 1)
        }
    }


    return(
        <>  
            <div id="container">
                <div id="text-container">
                    <h2>Welcome to Not My Fitness Pal! </h2>
                    <p id="home-para">Here at Not My Fitness Pal, we know how hard it is to make healthy food choices a priority in our busy lives. Our aim is to help you make concious food decisions without any hassle.</p>
                </div>
                <img className="home-pic" src={bowlHomePic} />
            </div>
            <section id="inspiration">
                <div className="inspiration-container">
                    <Story story={stories[currentStoryIndex]}/>
                    <div className="buttons_for_stories">
                        <a onClick={handlePreviousButtonClick} className="previous round">&#8249;</a>
                        <a onClick={handleNextButtonClick} className="next round">&#8250;</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;