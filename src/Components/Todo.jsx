import React from 'react'

const Todo = () => {
    const [inputValue , setInputValue] =React.useState("");
    // const [inputValue2 , setInputValue2] =React.useState("");
    const [todos , setTodos] =React.useState([])
 
  
 
  const getTodos =() =>{
   
      fetch(`http://localhost:3004/todos`)
      .then((res) => res.json())
      .then((res)=>{
           setTodos(res)
         
    
        })
    
  }
  
  
    const handleAdd =() => {
      console.log(inputValue)
      const payload ={
          title: inputValue,
          
          status: false
      };

      const payloadjson = JSON.stringify(payload);
      
   
      fetch(`http://localhost:3004/todos`,{
          method: "POST",
          body: payloadjson,
          headers: {
              "content-type": "application/json"
          }
      }).then(() =>{
        //   console.log(res)
          getTodos();
      })
  }
  
    return  (
    <div>

<input placeholder='Add Todos' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
{/* <input placeholder='Add Todos' value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}/> */}
<button onClick={handleAdd}>ADD</button>
{
    todos.map((item)=> {
        return   <div>{item.title}

        </div>;
       
   
    })
}
    </div>
  )
}

export  {Todo};