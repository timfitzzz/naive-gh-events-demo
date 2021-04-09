import React, { useState } from 'react'
import styled from 'styled-components'

const SourceSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  display: flex;
  flex-direction: row;
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

const ExpandSymbol = styled.div`
  margin-left: 5px;
  transform: ${p => p.open ? `rotate(180deg)` : `rotate(90deg)`};


`

export const SourceSelector = ({source, selectSource, sourceError}) => {

  let [userInput, setUserInput] = useState("")

  function selectDefault() {
    selectSource({type: 'default'})
  }

  function handleInputValueChange(e) {
    setUserInput(e.target.value)
  }
  
  function handleUserSubmit() {
    selectSource({type: 'user', value: userInput})
  }

  return (
    <SourceSelectorContainer>
      <SourceSelectorItemContainer>
        <SourceSelectorRadioButton 
          onClick={() => selectDefault()} current={source && source.type === 'default' ? true : false}
        /> 
        <SourceSelectorLabel>
          use GitHub public events feed
        </SourceSelectorLabel>
      </SourceSelectorItemContainer>
      <SourceSelectorItemContainer>
        <SourceSelectorRadioButton 
          onClick={(e) => {userInput && handleUserSubmit()}} 
          current={source && source.type === 'user' ? true : false}
        />
        <SourceSelectorInputField 
          value={userInput} 
          onChange={handleInputValueChange} 
          placeholder={"GitHub username"}
        />
        <SourceSelectorInputSaveButton 
          onClick={handleUserSubmit} 
          disabled={userInput ? false : true}>
            get feed
        </SourceSelectorInputSaveButton>
      </SourceSelectorItemContainer>
      <SourceSelectorItemContainer>
        <SourceSelectorRadioButton 
          onClick={(e) => {selectSource({type: 'input'})}} 
          current={source && source.type === 'input' ? true : false }
        />
        <SourceSelectorLabel>
          custom events JSON
          <ExpandSymbol open={source && source.type === 'input' ? true : false }>▲</ExpandSymbol> 
        </SourceSelectorLabel>
      </SourceSelectorItemContainer>
      <SourceSelectorErrorContainer>
        {sourceError}
      </SourceSelectorErrorContainer>
    </SourceSelectorContainer>

  )


}