import React from 'react'
import styled from 'styled-components'
import ToggleSwitch from './ToggleSwitch'
import { ToggleSwitchContainer, ToggleLabel } from './OptionsPanel'


const DisplayOptionsContainer = styled.div`
  background-color: white;
  padding: 2px 8px 8px 8px;
  border-radius: 8px;
  border: 1px solid thistle;
  width: 100%;
  margin-top: 4px;
`

export const DisplayOptionsPanelTitle = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`

export const DisplayOptionsToggleSwitch = styled(ToggleSwitch)`
  div { 
    color: purple;
  }
`


export const DisplayOptions = ({display, setDisplay}) => 
  <DisplayOptionsContainer>
    <DisplayOptionsPanelTitle>display options</DisplayOptionsPanelTitle>
    <ToggleSwitchContainer>
      <DisplayOptionsToggleSwitch name={'render markdown via react-markdown'} toggleCb={() => setDisplay(!display)} state={display} />
      <ToggleLabel><span>render markdown as html via <a href="https://github.com/remarkjs/react-markdown">react-markdown</a> or show raw</span></ToggleLabel>
    </ToggleSwitchContainer>
    
  </DisplayOptionsContainer>

export default DisplayOptions