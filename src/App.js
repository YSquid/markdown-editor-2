import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  const [inputValue, setInputValue] = useState('')

  useEffect (() => {
      setInputValue(
        '# Hi, this is the default text'
      )

  },[])

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className='card'>
      <textarea className ='card' value={inputValue} onChange={handleChange} />
      <ReactMarkdown>{inputValue}</ReactMarkdown>
  </div>
    
    
    
  )
}
export default App;
