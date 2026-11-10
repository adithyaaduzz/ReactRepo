
import React, { useState } from "react";
import "./App.css";

function App() {

    const [students, setStudents] = useState([
        { id: 1, name: "Rahul", rollNo: "101", studentClass: "10A" },
        { id: 2, name: "Anjali", rollNo: "102", studentClass: "10B" },
        { id: 3, name: "Arun", rollNo: "103", studentClass: "10A" }
    ]);

    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [studentClass, setStudentClass] = useState("");

    const [search, setSearch] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editRollNo, setEditRollNo] = useState("");
    const [editClass, setEditClass] = useState("");

    // Add Student
    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            name.trim() === "" ||
            rollNo.trim() === "" ||
            studentClass.trim() === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        const duplicate = students.some(
            student => student.rollNo.toLowerCase() === rollNo.trim().toLowerCase()
        );

        if (duplicate) {
            alert("Roll number already exists");
            return;
        }

        const newStudent = {
            id: students.length > 0
                ? Math.max(...students.map(student => student.id)) + 1
                : 1,
            name: name.trim(),
            rollNo: rollNo.trim(),
            studentClass: studentClass.trim()
        };

        setStudents([...students, newStudent]);

        setName("");
        setRollNo("");
        setStudentClass("");
    };

    // Delete Student
    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    // Edit Student
    const editStudent = (student) => {
        setEditingId(student.id);
        setEditName(student.name);
        setEditRollNo(student.rollNo);
        setEditClass(student.studentClass);
    };

    // Save Edited Student
    const saveStudent = (id) => {

        if (
            editName.trim() === "" ||
            editRollNo.trim() === "" ||
            editClass.trim() === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        const duplicate = students.some(
            student =>
                student.rollNo.toLowerCase() === editRollNo.trim().toLowerCase()
                && student.id !== id
        );

        if (duplicate) {
            alert("Roll number already exists");
            return;
        }

        setStudents(
            students.map(student =>
                student.id === id
                    ? {
                        ...student,
                        name: editName.trim(),
                        rollNo: editRollNo.trim(),
                        studentClass: editClass.trim()
                    }
                    : student
            )
        );

        cancelEdit();
    };

    // Cancel Editing
    const cancelEdit = () => {
        setEditingId(null);
        setEditName("");
        setEditRollNo("");
        setEditClass("");
    };

    // Search Students
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">

            <h1>Student List Management</h1>

            {/* Add Student Form */}
            <form onSubmit={handleSubmit} className="form">

                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Roll Number"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Class (e.g. 10A)"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                />

                <button type="submit">Add Student</button>

            </form>

            {/* Search */}
            <input
                className="search"
                type="text"
                placeholder="Search student by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Student Table */}
            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredStudents.length === 0 ? (

                        <tr>
                            <td colSpan="5">No students found</td>
                        </tr>

                    ) : (

                        filteredStudents.map(student => (

                            <tr key={student.id}>

                                <td>{student.id}</td>

                                <td>
                                    {editingId === student.id ? (
                                        <input
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                    ) : (
                                        student.name
                                    )}
                                </td>

                                <td>
                                    {editingId === student.id ? (
                                        <input
                                            value={editRollNo}
                                            onChange={(e) => setEditRollNo(e.target.value)}
                                        />
                                    ) : (
                                        student.rollNo
                                    )}
                                </td>

                                <td>
                                    {editingId === student.id ? (
                                        <input
                                            value={editClass}
                                            onChange={(e) => setEditClass(e.target.value)}
                                        />
                                    ) : (
                                        student.studentClass
                                    )}
                                </td>

                                <td>

                                    {editingId === student.id ? (

                                        <>
                                            <button onClick={() => saveStudent(student.id)}>
                                                Save
                                            </button>

                                            <button onClick={cancelEdit}>
                                                Cancel
                                            </button>
                                        </>

                                    ) : (

                                        <>
                                            <button onClick={() => editStudent(student)}>
                                                Edit
                                            </button>

                                            <button onClick={() => deleteStudent(student.id)}>
                                                Delete
                                            </button>
                                        </>

                                    )}

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default App;
