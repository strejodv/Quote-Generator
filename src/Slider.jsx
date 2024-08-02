import React, { useState, useEffect } from 'react';

function Slider () {

    const [quote, setQuote] = useState('Good Day!');
    const [quotes, setQuotes] = useState([]);

    const fetchQuote = async () => {

        try {
            const response = await fetch ('https://type.fit/api/quotes');
            const data = await response.json();
            setQuotes(data);
            setQuote(data[Math.floor(Math.random() * data.length)].text);
        }   catch (error) {
            console.error('Error fetching the quote:', error);
        }   
    };

    useEffect(() => {
        fetchQuote(); 
        }, []);

    const handleGetQuote = () => {
        if (quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex].text);
            }
        };    

    return (
        <>
        <div className="box">
            <div className="actualSlider">
                <h1>Quote Slider</h1>
                <h2>Press the button to get your daily quote!</h2>
                <p>{quote}</p>
                <button onClick={handleGetQuote}>Get Inspiration!</button>
            </div>
        </div>
        </>
    )
}

export default Slider;

