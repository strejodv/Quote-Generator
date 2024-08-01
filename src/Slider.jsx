import { useState } from 'react'



function getQuote(quote){
    const randomIndex = Math.floor(Math.random() * quote.length);
    return quote[randomIndex];
}

function Slider () {

    const [quote, setQuote] = useState ([
            "The only limit to our realization of tomorrow is our doubts of today.' - Franklin D. Roosevelt",
            "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
            "The purpose of our lives is to be happy. - Dalai Lama",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "The best way to predict the future is to invent it. - Alan Kay"
          ]); 
    
    
    const [randomQuote, setRandomQuote] = useState(getQuote(quote));
    
    const handleGetQuote = () => {
        setRandomQuote(getQuote(quote));
    }; 

    return (
        <>
        <div className="box">
            <div className="actualSlider">
                <h1>Quote Slider</h1>
                <h2>Press the button to get your daily quote!</h2>
                <p>{randomQuote}</p>
                <button onClick={handleGetQuote}>Get quote!</button>
            </div>
        </div>
        </>
    )
}

export default Slider