import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    regno:"",
    name:"",
    age:"",
    course:"",
    gpa:""    
  });

  const [students, setstudents] = useState([]);
  
  const[message, setMessage] = useState('');

  const handleValidate=()=>{
    if(!student.regno && !student.name){
      setMessage('Registration number and name are required.');
      return false;
    }
    if (students.some((s)=> s.regno === student.regno)) {
      setMessage('Duplicate registration number is not allowed.');
      return false;
    }
    setMessage('');
    return true;
  };

  const handleInputs=(e)=>{
    const {name, value} = e.target;
    setStudent((prev)=>({
      ...prev,
      [name]:value
    }));
  };

  const handleRegister=()=>{
    if (handleValidate()) {
      setstudents((prev)=>[...prev, student]);
      setStudent({regno:"", name:"", age:"", course:"", gpa:""});
    }
  };

  return (
    <div>
      <h2 style={{color: 'red'}}>{message}</h2>
      <table>
        <tr>
          <td>Registration No:</td>
          <td>  
            <input type="text" 
            name="regno" 
            onChange={handleInputs} 
            />
          </td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>  
            <input type="text" 
            name="name" 
            onChange={handleInputs} 
            />
          </td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>  
            <input type="number" 
            name="age" 
            onChange={handleInputs} 
            />
          </td>
        </tr>
        <tr>
          <td>Course:</td>
          <td>  
            <input type="text" 
            name="course" 
            onChange={handleInputs} 
            />
          </td>
        </tr>
        <tr>
          <td>GPA:</td>
          <td>  
            <input type="number" 
            name="gpa" 
            onChange={handleInputs} 
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button onClick={handleRegister}>Register</button>
          </td>
        </tr>
      </table>
      {students.map((s)=>(
        <ol>
          <li>{s.regno}|{s.name}|{s.course}|{s.gpa}</li>
        </ol>
      ))}
    </div>
    );
}

export default App;
