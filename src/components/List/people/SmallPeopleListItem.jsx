import React from 'react'

const SmallPeopleListItem = ({ person: { name, age } }) => {
  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  )
}

export default SmallPeopleListItem