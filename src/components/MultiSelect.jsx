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
  const [searchInput,setSearchInput]=useState([])
  
  const multiSelectHanlder=(e)=>{
     const {value}= e.target;
      if(selected.includes(value)){
        setSelected(selected.filter(item=>item!==value));
        setSearchInput([...selected])
      }
      else{
         let selectedValues= selected;
         selectedValues.push(value);
         setSelected([...selectedValues])
         setSearchInput([...selected])
      }
  }
  console.log(selected);
  return (
    <div className='multi_select'>
       <input contentEditable ='true' type="text" placeholder='Select Value'  value={searchInput.join(", ")}
       onChange={(e)=>{
        let tempSearch= searchInput;
         tempSearch.push(e.target.value)
        searchInput.push([...tempSearch])
       }}
       /> <br />
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
