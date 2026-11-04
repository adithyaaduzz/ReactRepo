
import React, { useState } from 'react';
import './App.css';

function App() {

    // Favorite foods
    const foods = ["Pizza", "Burger", "Biriyani", "Ice Cream", "Pasta"];

    // State to store the message
    const [message, setMessage] = useState("Select a food that you love!");

    // Function to handle button click
    const showLove = (food) => {
        setMessage(`I love ${food}!`);
    };

return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

        <div className="card shadow p-4 text-center">

            <h1 className="mb-4">My Favorite Foods</h1>

            <div className="food-list">
                {foods.map((food, index) => (
                    <div key={index} className="food-item">
                        <span>{food}</span>

                        <button
                            className="btn btn-primary"
                            onClick={() => showLove(food)}
                        >
                            Love ❤️
                        </button>
                    </div>
                ))}
            </div>

            <h4 className="mt-4 text-success">{message}</h4>

        </div>

    </div>
);

}
export default App;
