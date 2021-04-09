import { useState } from 'react'
import styled from 'styled-components'
import Header from './Header';
import EventsDisplay from './EventsDisplay';
import DisplayOptions from './DisplayOptions';
import OptionsPanel from './OptionsPanel';
import { useRenderOptions } from './hooks/useRenderOptions';
import useEvents from './hooks/useEvents';

const AppOuterContainer = styled.div`
  width: '100vw';

  div {
    box-sizing: border-box;
  }
`

const AppInnerContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  padding-right: 5px;
`

const EventsListHeader = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-self: baseline;
  font-size: 30px;
  width: 100%;
  font-weight: bolder;
  color: purple;
`

function App() {

  let [options, changeOptions] = useRenderOptions()
  let [events, source, error, selectSource] = useEvents(options)
  let [display, setDisplay] = useState(true)

  return (
    <AppOuterContainer>
      <AppInnerContainer>
        <Header />
        <EventsListHeader>
          <OptionsPanel events={events} sourceControls={[source, selectSource]} changeOptions={changeOptions} options={options} error={error}/>
          <DisplayOptions display={display} setDisplay={setDisplay}/>
        </EventsListHeader>
        <EventsDisplay options={options} events={events} display={display}/>
      </AppInnerContainer>
    </AppOuterContainer>
  );
}

export default App;
