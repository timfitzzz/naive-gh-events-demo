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

export const ToggleSwitchesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ToggleSwitchContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 5px;
`

export const ToggleLabel = styled.div`

  font-size: 10px;
  margin-left: 6px;
  margin-top: 0;
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
  justify-content: space-between;
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
  groupStartDay: 'day of week to start first group from',
  groupByDays: 'number of days of events to group together',
  dateTimeFormatOptions: 'example Luxon display format',
  startDate: 'filter out prior events',
  reverseSortEvents: 'reverse sortBy'
}

const droptions = {
  sortBy: [
    { value: 'date', description: 'date'},
    { value: 'actor', description: 'actor (user)'},
    { value: 'type', description: 'event type'},
    { value: 'parent', description: 'parent of action'}
  ],
  groupByDays: [
    { value: 1, description: '1 day'},
    { value: 3, description: '3 days'},
    { value: 7, description: '7 days'},
    { value: 14, description: '14 days'},
    { value: 30, description: '30 days'}
  ],
  groupStartDay: [
    { value: 0, description: 'sunday'},
    { value: 1, description: 'monday'},
    { value: 2, description: 'tuesday'},
    { value: 3, description: 'wednesday'},
    { value: 4, description: 'thursday'},
    { value: 5, description: 'friday'},
    { value: 6, description: 'saturday'}
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

export const OptionsPanel = ({sourceControls, changeOptions, options, sourceError, setSourceError}) => {

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
      <SourceSelector source={source} setSource={setSource} sourceError={sourceError} setSourceError={setSourceError}/>
      <OptionsPanelTitle>render options</OptionsPanelTitle>
      <ToggleSwitchesContainer>
            { Object.getOwnPropertyNames(options).filter(n => typeof options[n] === 'boolean').map(toggleName =>
            <ToggleSwitchContainer key={toggleName+'toggler'}>
              <ToggleSwitch name={toggleName} toggleCb={toggle} state={options[toggleName]}/>
              <ToggleLabel>{toggleName}<span>{descriptionsTable[toggleName]}</span></ToggleLabel>
            </ToggleSwitchContainer>

            )}
      </ToggleSwitchesContainer>
      <DropDownsContainer>
          <DropDownSelector description={descriptionsTable.sortby} name={'sortBy'} options={droptions['sortBy']} state={options['sortBy']} setter={changeOptions}/>
          <DropDownSelector description={descriptionsTable.groupByDays} name={'groupByDays'} options={droptions['groupByDays']} state={options['groupByDays']} setter={changeOptions} setAsNumber={true}/>
          <DropDownSelector description={descriptionsTable.groupStartDay} name={'groupStartDay'} options={droptions['groupStartDay']} state={options['groupStartDay']} setter={changeOptions} setAsNumber={true}/>
          <DropDownSelector description={descriptionsTable.dateTimeFormatOptions} name={'dateTimeFormatOptions'} options={droptions['dateTimeFormatOptions']} state={dateTimeFormatState} setter={setDateTimeFormat}/>
      </DropDownsContainer>
    </OptionsContainer>
  )


}

export default OptionsPanel