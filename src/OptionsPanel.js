import React, { useState } from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'

import ToggleSwitch from './ToggleSwitch'
import DropDownSelector from './DropDownSelector'
import { SourceSelector } from './SourceSelector'

const OptionsContainer = styled.div`
  background-color: thistle;
  padding: 2px 8px 8px 8px;
  border-radius: 8px;
  width: 100%;
`

const ToggleSwitchesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ToggleSwitchContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`

const ToggleLabel = styled.div`

  font-size: 10px;
  margin-left: 6px;
  margin-top: auto;
  margin-bottom: auto;
  > span {
    font-weight: normal;
    margin-left: 5px;
  }

`

const DropDownsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5px;
  max-width: 700px;
  margin-top: 5px;
  align-items: top;
`



let descriptionsTable = {
  collapse: 'combine similar events',
  dateSummaries: 'prepend dates to summary lines',
  dateContent: 'prepend dates to content lines',
  md: 'render as markdown',
  omitContent: 'display only summaries',
  indentContent: 'indent content lines',
  newLinesBetween: 'add extra line between items',
  sortBy: 'display order',
  groupByDays: 'number of days of events to group together',
  dateTimeFormatOptions: 'example Luxon display format'
}

const droptions = {
  sortBy: [
    { value: 'date', description: 'date'},
    { value: 'actor', description: 'actor (user)'},
    { value: 'type', description: 'event type'},
    { value: 'target', description: 'target of action'},
    { value: 'parent', description: 'parent of action'}
  ],
  groupByDays: [
    { value: 1, description: '1 day'},
    { value: 7, description: '1 week'},
    { value: 14, description: '2 weeks'},
    { value: 30, description: '1 month'}
  ],
  dateTimeFormatOptions: [
    { value: 'DATE_FULL', description: 'month, day, year'},
    { value: 'DATETIME_FULL', description: 'month, day, year, time'},
    { value: 'DATETIME_FULL_WITH_SECONDS', description: 'month, day, year, time:seconds'}
  ]
}

export const OptionsPanelTitle = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`

export const OptionsPanel = ({sourceControls, changeOptions, options}) => {

  let [dateTimeFormatState, setDateTimeFormatState] = useState('DATE_FULL')
  let [source, setSource] = sourceControls

  function toggle(switchName) {
    changeOptions({ [switchName]: !options[switchName]})
  }

  function setDateTimeFormat({ dateTimeFormatOptions }) {
    setDateTimeFormatState(dateTimeFormatOptions)
    changeOptions({ dateTimeFormatOptions: DateTime[dateTimeFormatOptions]})
  }

  return (
    <OptionsContainer>
      <OptionsPanelTitle>source</OptionsPanelTitle>
      <SourceSelector source={source} setSource={setSource} />
      <OptionsPanelTitle>render options</OptionsPanelTitle>
      <ToggleSwitchesContainer>
            { Object.getOwnPropertyNames(options).filter(n => typeof options[n] === 'boolean').map(toggleName =>
            <ToggleSwitchContainer>
              <ToggleSwitch key={toggleName+'toggler'} name={toggleName} toggleCb={toggle} state={options[toggleName]}/>
              <ToggleLabel>{toggleName}<span>{descriptionsTable[toggleName]}</span></ToggleLabel>
            </ToggleSwitchContainer>

            )}
      </ToggleSwitchesContainer>
      <DropDownsContainer>
          <DropDownSelector description={descriptionsTable.sortby} name={'sortBy'} options={droptions['sortBy']} state={options['sortBy']} setter={changeOptions}/>
          <DropDownSelector description={descriptionsTable.groupByDays} name={'groupByDays'} options={droptions['groupByDays']} state={options['groupByDays']} setter={changeOptions}/>
          <DropDownSelector description={descriptionsTable.dateTimeFormatOptions} name={'dateTimeFormatOptions'} options={droptions['dateTimeFormatOptions']} state={dateTimeFormatState} setter={setDateTimeFormat}/>
      </DropDownsContainer>
    </OptionsContainer>
  )


}

export default OptionsPanel