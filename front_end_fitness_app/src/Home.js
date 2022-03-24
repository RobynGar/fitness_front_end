import React, { useState } from "react";
import homePic from './assets/homePic.jpeg';
import longHomePic from './assets/longHomePic.jpeg'
import transparentHomePic from './assets/transparentHomePic.png'
import middleButToTheRightABitHomePic from './assets/middleButToTheRightABitHomePic.png'
import bowlHomePic from './assets/bowlHomePic.png';
import strawberryHomePic from './assets/strawberryHomePic.png';
import johnDoePic from './assets/johnDoe.jpeg'
import janeDoePic from './assets/janeDoe.jpeg'
import Story from "./components/Story";


const Home = () => {

    const [stories,setStories] = useState([
        {
            name: "John Doe",
            text: "Test text for John Doe",
            picture: johnDoePic
        },
        {
            name: "Jane Doe",
            text: "Test text for Jane Doe",
            picture: janeDoePic
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
                    <div className="stories-item">
                    <a onClick={setTimeout(() => {
                        handlePreviousButtonClick()
                        }, 4000)} className="previous round">&#8249;</a>
                    <a onClick={handleNextButtonClick} className="next round">&#8250;</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;