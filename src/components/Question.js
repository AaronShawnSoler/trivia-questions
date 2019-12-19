import React, { useState, useEffect } from 'react';

function Question({questionData, answer}) {

    const [styles, setStyles] = useState({ margin: '16px 0'});

    const choices = [
        ...questionData.incorrect_answers,
        questionData.correct_answer
    ]

    choices.sort((a, b) => 0.5 - Math.random());

    const handleChoice = (event) => {
        console.log(event.target.innerText);
        event.target.innerText === questionData.correct_answer ? setStyles({ margin: '16px 0', background: '#0f0'}) : setStyles({ margin: '16px 0', background: '#f00'})
    }

    return(
        <div style={styles}>
            <h2>{questionData.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</h2>
            {choices.map((choice, index) => <button onClick={handleChoice} key={index}>{choice.replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, "'").replace(/&eacute;/g, "é")}</button>)}
        </div>
    ) 
}

export default Question;