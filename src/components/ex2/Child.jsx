import React from 'react'

// function Child({changeUser, a, b}) {
  function Child(props) {       //using props
  function changeFun()
  {
    var name = document.getElementById("idname").value;
    var salary = document.getElementsByName("tb")[0].value;
    var location = document.getElementsByName("tb")[1].value;
    // changeUser(name,salary,location)
    props.changeUser(name,salary,location)      //using props
  }
  return (
    <div>
      Name: <input type="text" id="idname" />
      <br/>
      Salary: <input type="text" name="tb" />
      <br/>
      Location: <input type="text" name="tb" />
      <br/>
      <button onClick={changeFun}>Update user</button>
      <br/>
      {/* {a} - {b} */}
      {props.a} - {props.b}   //using props
      
    </div>
  )
}

export default Child
