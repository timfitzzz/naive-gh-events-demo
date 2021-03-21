import React from 'react'
import styled from 'styled-components'

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  padding-top: 5px;
  padding-left: 2px;
  font-size: 10px;
  margin-top: 0;
  box-sizing: border-box;

  @media (max-width: 599px) {
    min-width: 47%;
  }
  @media (min-width: 600px) {
    min-width: 20%;
  }

  select {
    font-size: 10px;
  }
`

const DropDownTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: auto;
  > span {

    margin-right: 10px;
  }
`

const DropDownDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  font-weight: normal;
  margin-top: 1px;
`

const DropDownSelector = ({description, disabled, name, options, state, setter, setAsNumber}) => {

  return (
    <DropDownContainer>
      <DropDownTopContainer>
        <span>{name}</span>
        <select defaultValue={state} disabled={disabled} name={name} onChange={(e) => { setter({ [name]: setAsNumber ? parseInt(e.target.value) : e.target.value })}}>
          { options.map(option => 
            <option key={'option'+option.value} value={option.value} >{option.description}</option>
          )}
        </select>
      </DropDownTopContainer>
      <DropDownDescription>
        {description}
      </DropDownDescription>
    </DropDownContainer>

  )
}

export default DropDownSelector