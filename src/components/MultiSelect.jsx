import React from 'react'
import "./MultiSelect.css"
export default function MultiSelect() {
  return (
    <div className='multi_select'>
      <label htmlFor="">Select Values</label> <br />
       <select
          placeholder='Select Options'
    >
      <option value=""></option>
        <option value="value1">option1</option>
        <option value="value2">option2</option>
        <option value="value3">option3</option>
        <option value="value4">option4</option>
      </select>
    </div>
  )
}
