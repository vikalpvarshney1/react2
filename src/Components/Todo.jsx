import React from 'react'

const Todo = () => {
    const [inputValue , setInputValue] =React.useState("");
    const [inputValue2 , setInputValue2] =React.useState("");
    const [inputValue3 , setInputValue3] =React.useState("");
    const [inputValue4 , setInputValue4] =React.useState("");
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
          name: inputValue2,
          gender:inputValue3,
          department:inputValue4,
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
<br></br>
<input placeholder='Add Todos' value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}/>
<br></br>
<input placeholder='Add Todos' value={inputValue3} onChange={(e) => setInputValue3(e.target.value)}/>
<br></br>
<input placeholder='Add Todos' value={inputValue4} onChange={(e) => setInputValue4(e.target.value)}/>
<br></br>
<button onClick={handleAdd}>ADD</button>
<center>
{
    todos.map((item)=> {
        return   <h5>{item.title}
        <br></br>
{item.name}
<br></br>
{item.gender}
<br></br>
{item.department}
        </h5>;
       
   
    })
}
</center>
    </div>
  )
}


export  {Todo};