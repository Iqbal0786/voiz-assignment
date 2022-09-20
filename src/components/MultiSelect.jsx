import React, { useState } from 'react'
import "./MultiSelect.css"
export default function MultiSelect() {
  let optionData=[
    {
      option:"Option 1",
      value:"value 1"
    },
    {
      option:"Option 2",
      value:"value 2"
    },
    {
      option:"Option 3",
      value:"value 3"
    }
  ]
  const [selected,setSelected]=useState([]);
  
  const multiSelectHanlder=(e)=>{
     const {value}= e.target;
      if(selected.includes(value)){
        setSelected(selected.filter(item=>item!==value))
      }
      else{
         let selectedValues= selected;
         selectedValues.push(value);
         setSelected([...selectedValues])
      }
  }
  console.log(selected);
  return (
    <div className='multi_select'>
       <input type="text" placeholder='Select Value'  value={selected.join(", ")}/> <br />
      <label htmlFor="">Select Values</label> <br />
       <select
          onChange={multiSelectHanlder}
    >
       {/* {
        optionData.map((op)=>{
          return  <option value={op.value}> {op.option}</option>
        })
       } */}
        <option value=""></option>
       <option value="value 1">Option 1</option>
       <option value="value 2">Option 2</option>
       <option value="value 3">Option 3</option>
       <option value="value 4">Option 4</option>
      </select>
    </div>
  )
}
