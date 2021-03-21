import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SourceSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  margin-bottom: 5px;
`

const SourceSelectorItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 20px;
`

const SourceSelectorErrorContainer = styled(SourceSelectorItemContainer)`
  color: maroon;
`

const SourceSelectorLabel = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`

const SourceSelectorRadioButton = styled.div`

  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 3px solid purple;
  background-color: ${p => p.current ? 'white' : 'purple'};
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 5px;

`

const SourceSelectorInputField = styled.input`
  font-size: 10px;
`

const SourceSelectorInputSaveButton = styled.button`
  font-size: 10px;
`


export const SourceSelector = ({source, setSource, sourceError, setSourceError}) => {

  let [active, setActive] = useState(source ? true : false)
  let [inputValue, setInputValue] = useState(""
  )
  useEffect(() => {
    if (source) {
      setActive(true)
    }
  }, [source])

  function selectDefault() {
    setActive(false)
    setSource(null)
    setSourceError(null)
  }

  function handleInputValueChange(e) {
    setInputValue(e.target.value)
  }
  
  function handleSubmit(e) {
    setSource(inputValue)
    setActive(true)
    setSourceError(null)
  }


  return (
    <SourceSelectorContainer>
      <SourceSelectorItemContainer>
        <SourceSelectorRadioButton onClick={() => selectDefault()} current={source || active ? false : true}/> <SourceSelectorLabel>use GitHub public events feed</SourceSelectorLabel>
      </SourceSelectorItemContainer>
      <SourceSelectorItemContainer>
        <SourceSelectorRadioButton onClick={(e) => {inputValue && setActive(true); handleSubmit(e)}} current={source || active ? true : false}/><SourceSelectorInputField value={inputValue} onChange={handleInputValueChange} placeholder={"Github User Public Feed"}/><SourceSelectorInputSaveButton onClick={handleSubmit} disabled={inputValue ? false : true}>get feed</SourceSelectorInputSaveButton>
      </SourceSelectorItemContainer>
      <SourceSelectorErrorContainer>
        {sourceError}
      </SourceSelectorErrorContainer>
    </SourceSelectorContainer>

  )


}