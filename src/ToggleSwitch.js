import React from 'react'
import styled from 'styled-components'

const ToggleButtonLabel = styled.label`
  position: relative;
  display: inline-block;
  min-width: 30px;
  height: 17px;
`

const ToggleButtonInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked {
    background-color: #2196F3
  }

  &:focus {
    box-shadow: 0 0 1px #2196F3;
  }
`

const ToggleButtonSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;

    ${p => p.state ? `
      -webkit-transform: translateX(13px);
      -ms-transform: translateX(13px);
      transform: translateX(13px);
    ` : ''}
  }

  ${p => p.state ? `
    background-color: purple;
    box-shadow: 0 0 1px #2196F3;
  ` : '' }
`
const ToggleSwitch = ({name, toggleCb, state}) => {
  
  return (
    <ToggleButtonLabel> 
      <ToggleButtonInput value={state} onClick={(e) => { e.preventDefault(); toggleCb(name)}}/>
      <ToggleButtonSlider state={state}/>
    </ToggleButtonLabel>
  )
}

export default ToggleSwitch