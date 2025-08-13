import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [name,setName]= useState('krishna')
    const [salary, setSalary] = useState(0)
    const [location, setLocation] = useState('vij')
    function Display()
    {
        return(
            <div>
                Name:{name},
                <br/>
                Salary:<i class="fa fa-rupee"></i>{salary},
                <br/>
                Location:{location}
            </div>
        )
    }
    const changeUser = (n,s,l)=>
    {
        setName(n);
        setSalary(s);
        setLocation(l);
    }

  return (
    <div>
        <Display/>
        <br/><br/><br/>
        {/* <Child changeUser={changeUser} /> */}
        <Child changeUser={changeUser} a={10} b={20} />
    </div>
  )
}
