import React from 'react'
import styled from 'styled-components'
import Npmlogo from './npm-logo.svg'
import GHlogo from './gh.svg'

const HeaderContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: baseline;
  font-size: 30px;
  width: 100%;
  font-weight: bolder;
  color: purple;
  box-sizing: border-box;
`

const NaiveEventsTitle = styled.div`
  margin-bottom: auto;
  margin-top: auto;
  
`

const NaiveEventsDescriptionContainer = styled.div`
  border: 2px solid thistle;
  max-width: 300px;
  margin: 4px 0 4px auto;
  border-radius: 10px;
  padding: 4px 0px 8px 8px;
`

const NaiveEventsDescription = styled.div`
  font-size: 12px;
  font-weight: normal;


`

const NaiveEventsDescriptionTitle = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 12px;
  align-content: center;
  a {
    > span {
      margin-top: auto;
      bottom: auto;
    }
    margin-top: auto;
    margin-bottom: auto;
  }
`


const NaiveIcon = styled.img`
  max-height: 15px;
  margin-left: 5px;
`



export const Header = () => {

  return (
    <HeaderContainer>
      <NaiveEventsTitle>naive-gh-events demo</NaiveEventsTitle>
      <NaiveEventsDescriptionContainer>
        <NaiveEventsDescriptionTitle>
          <a href="https://github.com/timfitzzz/naive-gh-events">
          naive-gh-events</a>
          <a href="https://github.com/timfitzzz/naive-gh-events"><NaiveIcon src={GHlogo}/>
          </a><a href="https://www.npmjs.com/package/naive-gh-events">
          <NaiveIcon src={Npmlogo}/></a>
        </NaiveEventsDescriptionTitle>       
        <NaiveEventsDescription>
          Render event objects from the GitHub API as natural English, in plaintext or markdown.

        </NaiveEventsDescription>
      </NaiveEventsDescriptionContainer>
    </HeaderContainer>
  )

}

export default Header