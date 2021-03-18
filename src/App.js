import styled from 'styled-components'
import Header from './Header';
import EventsDisplay from './EventsDisplay';

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
`

function App() {
  return (
    <AppOuterContainer>
      <AppInnerContainer>
        <Header />
        <EventsDisplay />
      </AppInnerContainer>
    </AppOuterContainer>
  );
}

export default App;
