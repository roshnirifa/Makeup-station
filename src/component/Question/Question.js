import React from 'react';

const Question = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1>Question: How Does react work?</h1>
            <p>React is a JavaScript library for building user interfaces. Here library is some collection of code where we can reuse it and make our web application. In the same way, react is also some collection of vanilla js. This vanilla js create an interface for the web application. React mainly work with user Interface. React responded to user interaction, render and display information in the DOM.
                React render all the components where we see all information in the DOM. React create a virtual DOM which compares the previously created DOM and check what is changed, and updates only the changed value, and all the component remain as it is. In this way react to create a SPA without loading the page.

            </p>

            <h1>Question: How useState Works?</h1>
            <p>useState is a Hook. where we send one or more varible function component. useState accepts two things 1. variable 2. special function which dispatch the states actions. That means when a new value in arriverd its check that its  a new value. Then find the changes in the DOM and re-render by  seting the new value. State update in asynchronous way.</p>

        </div>
    );
};

export default Question;