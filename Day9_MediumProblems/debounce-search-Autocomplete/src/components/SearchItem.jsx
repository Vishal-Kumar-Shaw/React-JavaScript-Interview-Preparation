import React from 'react'

const SearchItem = ({value,index}) => {
  return (
    <div key={index} style={{padding:'5px', marginBottom:'2px', background:'aliceblue'}}>
      {value}
    </div>
  )
}

export default SearchItem
