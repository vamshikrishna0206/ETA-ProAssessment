import React,{useState} from "react";
let login=()=>{
    let [data,setData]=useState({"email":"",password:""})
    let update=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let loginapp=async()=>{
        let res=await post("http://localhost:5000/login",data)
        console.log(res.data.msg)
    }
    return(<div>
        <input type="text" name="email" onchange={(e)=>update(e)}/>
        <input type="password" name="password" onchange={(e)=>update(e)}/>
        <button onClick={loginapp}>login</button>
    </div>)
}

export default login;