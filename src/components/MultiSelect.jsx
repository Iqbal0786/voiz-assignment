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
  const [selected,setSelected]=useState([])
  const multiSelectHanlder=(e)=>{
     const {value}= e.target;
      if(selected.includes(value)){
        setSelected(selected.filter(e=>e!==value))
      }
      else{
         let selectedValues= selected;
         selectedValues.push(value);
         setSelected(selectedValues)
      }
  }
  console.log(selected);
  return (
    <div className='multi_select'>
      <label htmlFor="">Select Values</label> <br />
       <select
          placeholder='Select Options'
          onChange={multiSelectHanlder}
          value={selected.join(",")}
    >
      <option value=""></option>
       {
        optionData.map((op)=>{
          return  <option value={op.value}> {op.option}</option>
        })
       }
      </select>
    </div>
  )
}
