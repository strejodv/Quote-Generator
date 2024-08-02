import React, { useState, useEffect } from 'react';





function Slider () {

    const [quote, setQuote] = useState('Good Day!');

    const fetchQuote = async () => {

        try {
            const response = await fetch ('https://goquotes-api.herokuapp.com/api/v1/random?count=/random');
            const data = await response.json();
            setQuote(data.content);
        }   catch (error) {
            console.error('Error fetching the quote:', error);
        }   
    };

    useEffect(() => {
        fetchQuote(); 
        }, []);

    const handleGetQuote = () => {
            fetchQuote(); 
            };    

    return (
        <>
        <div className="box">
            <div className="actualSlider">
                <h1>Quote Slider</h1>
                <h2>Press the button to get your daily quote!</h2>
                <p>{quote}</p>
                <button onClick={handleGetQuote}>Get quote!</button>
            </div>
        </div>
        </>
    )
}

export default Slider;