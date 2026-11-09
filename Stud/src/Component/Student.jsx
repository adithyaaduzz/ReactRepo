import { useParams, Link } from "react-router-dom";

function Student() {

    const { name } = useParams();

    return (
        <div>
            <h1>Welcome, {name}!</h1>

            <Link to="/">Go Back Home</Link>
        </div>
    );
}

export default Student;