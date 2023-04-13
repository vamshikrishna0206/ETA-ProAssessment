import React, { useState } from "react";
import './App.css';


function App() {
  const [fileData, setFileData] = useState();
  const [token,setToken]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEiLCJpYXQiOjE2NzkyMDMwMDF9.NT_Yl350K45mfvHvbvXSJcCwsn5V16qh9oiIZ8Lrh-Q")

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
console.log("token",setToken)
    // Handle File Data from the state Before Sending
    const data = new FormData();
    data.append("image", fileData);
    
    fetch("http://localhost:5000/upload_file", {
      method: "POST",
      headers:{"Authorization":`Bearer ${token}`},
      body: data,
     
    })
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <h1>Upload the File</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br/>
        <button type="submit">Submit File to Backend</button>
      </form>
    </div>
  );
  
}


export default App;

