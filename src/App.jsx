
import React from 'react';
import './App.css';

function App() {

    // Personal Information
    const name = "Alex";
    const age = 20;
    const isStudent = true;

    // Heading background color
    const headingColor = "lightblue";

    // Favorite Hobbies
    const favoriteHobbies = ["Reading", "Coding", "Music"];

    // Initial message
    const showMessage = () => {
        document.getElementById("message").innerText =
            "Hello from React! I love my hobbies!";

        document.getElementById("heading").style.backgroundColor =
            headingColor;
    };

    return (
        <div className="container mt-5">

            <h1 id="heading" className="text-center p-3">
                My Personal Information
            </h1>

            {/* Personal Information Card */}
            <div className="card mt-4">
                <div className="card-body">
                    <h3 className="card-title">Personal Details</h3>

                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Is Student: {isStudent.toString()}</p>
                </div>
            </div>

           <h3 className="mt-4 text-start">
    Favorite Hobbies (Using For Loop)
</h3>

<ul className="hobby-list">
    {
        (() => {
            const hobbyList = [];

            for (let i = 0; i < favoriteHobbies.length; i++) {
                hobbyList.push(
                    <li key={i}>{favoriteHobbies[i]}</li>
                );
            }

            return hobbyList;
        })()
    }
</ul>

           <h3 className="mt-4 text-start">
    Favorite Hobbies (Using Map)
</h3>

<ul className="hobby-list">
    {favoriteHobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
    ))}
</ul>

            {/* Interactive Button */}
            <button
                className="btn btn-primary mt-3"
                onClick={showMessage}
            >
                Show Enthusiasm
            </button>

            {/* Message */}
            <p id="message" className="mt-3">
                Click the button to see my enthusiasm!
            </p>

        </div>
    );
}

export default App;
