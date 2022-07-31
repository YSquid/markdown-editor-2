import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'



function App() {

  const [inputValue, setInputValue] = useState('')

  useEffect (() => {
      setInputValue(
        '# Hi, this is the *default text*'
      )

  },[])

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div id='wrapper'>

      {/*notice that the card title is in the same context as card-text (both inside card-body)*/}
      <div id='input-card' className='card-body'>
      <h2 className='card-title'>Editor</h2>
        <textarea className ='card-text' value={inputValue} onChange={handleChange} />
      </div>

      <div id='preview-card' className='card-body'>
        <h2 className='card-title'>Markdown Preview</h2>
        <ReactMarkdown className='card-text'>{inputValue}</ReactMarkdown>
      </div>


  </div>
    
    
    
  )
}
export default App;
