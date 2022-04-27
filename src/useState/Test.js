import React from 'react'
import { useState } from 'react'            /* named export*/

function Test() {

    // SIMPLE CHANGES
    const [name, setName] = useState("AKshay")

    const changethething=()=>{
        setName("oks")
    }

    // CHANGE AS OBJECT
    const[user, setUser]=useState({
        name:"raju",
        age:45
    })

    const updateObjectChange=()=>{
        setUser((prevState)=>({
            ...prevState,
            name:"meki",
            age:32
        }))
    }

  return (
    <div>
    
    <h1>THIS is useState Hooks</h1>
    <p >name is here {name}</p>
    <p >name and age is here {user.name} with {user.age}</p>
    <button onClick={changethething}>CLICK To change by setState</button>  
    <button onClick={updateObjectChange}>CLICK To change object by setState</button>  
    
    
    </div>
  )
}

export default Test