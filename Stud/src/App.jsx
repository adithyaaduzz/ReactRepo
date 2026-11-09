import { Link, useNavigate } from "react-router-dom";

function App() {

    const navigate = useNavigate();

    const students = ["Riya", "Albin", "Jenny", "Anu"];

    return (
        <div>
            <h1>Student List</h1>

            {students.map((student, index) => (
                <p key={index}>
                    <Link to={`/student/${student}`}>
                        {student}
                    </Link>
                </p>
            ))}

            <button onClick={() => navigate("/student/Riya")}>
                Go to Default Student
            </button>

        </div>
    );
}

export default App;