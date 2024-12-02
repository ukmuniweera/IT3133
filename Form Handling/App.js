import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    regno: "",
    name: "",
    age: "",
    course: "",
    gpa: "",
  });

  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");

  const handleValidate = () => {
    if (!student.regno || !student.name) {
      setMessage("Registration number and name are required.");
      return false;
    }
    if (students.some((s) => s.regno === student.regno)) {
      setMessage("Duplicate registration number is not allowed.");
      return false;
    }
    setMessage("");
    return true;
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    if (handleValidate()) {
      setStudents((prev) => [...prev, student]);
      setStudent({ regno: "", name: "", age: "", course: "", gpa: "" });
    }
  };

  return (
    <div>
      <h1>Students Information Portal</h1>
      <h2 style={{ color: "red" }}>{message}</h2>
      <table>
        <tbody>
          <tr>
            <td>Registration No:</td>
            <td>
              <input
                type="text"
                name="regno"
                value={student.regno}
                onChange={handleInputs}
              />
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleInputs}
              />
            </td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>
              <input
                type="number"
                name="age"
                value={student.age}
                onChange={handleInputs}
              />
            </td>
          </tr>
          <tr>
            <td>Course:</td>
            <td>
              <input
                type="text"
                name="course"
                value={student.course}
                onChange={handleInputs}
              />
            </td>
          </tr>
          <tr>
            <td>GPA:</td>
            <td>
              <input
                type="number"
                name="gpa"
                value={student.gpa}
                onChange={handleInputs}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={handleRegister}>Register</button>
            </td>
          </tr>
        </tbody>
      </table>
      <ol>
        {students.map((s, index) => (
          <li key={index}>
            {s.regno} | {s.name} | {s.course} | {s.gpa}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
