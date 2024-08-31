import React from 'react'
import PropType from 'prop-types'
function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student:{props.isstudent ? "Yes" : "no"}</p>
      <hr />
    </div>
  )
}


Student.PropType = {
    name: PropType.string,
    age: PropType.number,
    isstudent : PropType.bool
}
Student.defaultProps = {
    name: "guest",
    age: 0,
    isstudent: false
}

export default Student
