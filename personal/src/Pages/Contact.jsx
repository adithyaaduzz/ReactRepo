import React from 'react';

function Contact() {

    const headingColor = "lightblue";

    const showEnthusiasm = () => {
        document.getElementById("message").innerHTML =
            "Hello from React! I love this page!";

        document.getElementById("heading").style.backgroundColor =
            headingColor;
    };

    return (
        <div className="card p-4 mb-4">
            <h1 id="heading">This is the Contact Page</h1>

            <p id="message">
                Click the button to see my enthusiasm!
            </p>

            <button
                className="btn btn-primary"
                onClick={showEnthusiasm}
            >
                Show Enthusiasm
            </button>
        </div>
    );
}

export default Contact;