import React from 'react'
import Select from 'react-select'
import "../styles/MultiSelect.css"
export default function CustomeMultiselect() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
       <div className='multiSelect'>
        <Select
    defaultValue={[options[1], options[2]]}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
       </div>
  )
}
