import React, { useMemo } from 'react'
import styled from 'styled-components'
import Naive from 'naive-gh-events'
import ReactMarkdown from 'react-markdown'

const EventsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const EventsList = styled(ReactMarkdown)`
  max-width: 700px;
  margin-left: 8px;
  margin-right: 8px;
  text-align: left;
  font-size: 12px;
  word-wrap: normal;

  a {
      color: purple;
    }

  a {
    font-weight: bold;
  }

  ul {
    margin-left: 20px;
    padding-left: 5px;
    border-left: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    list-style: none;
  }

  li {
    padding: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    background-color: purple;
    color: white;

    img {
      width: 100%;
    }

    a {
      color: thistle;
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  > p {
    &:first-of-type {
      margin-top: 8px;
    }
  }
`

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LoadingText = styled.div`
  margin: 20px auto auto auto;
`

const PlainEventsList = styled.div`
  font-family: monospace;
  max-width: 700px;
  overflow: wrap;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 12px;
  margin-top: 14px;
`

const PlainEventsLine = styled.div`
  white-space: pre-wrap;       /* css-3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
`

const EventsGroupDate = styled.div`
  text-align: left;
  font-size: 15px;
  width: 100%;
  display: inline-block;
  margin-top: 20px;
  font-weight: bold;
  color: purple;
`

const EventsDisplay = ({loaded, options, events, display}) => {

  const renderedEventGroups = useMemo(() => {
    return events ? Naive.renderEvents(events, options) : null
  }, [events, options])


  return (
    <EventsListContainer>
      { renderedEventGroups && renderedEventGroups.map((event, i) => {
        return options.md ? (
            display ? (
            <div key={'event'+ i}>
              <EventsGroupDate>{event.startDate} - {event.endDate}</EventsGroupDate>
              <EventsList>{event.renderedEventCollections.join("")}</EventsList>
            </div>
          ) : <PlainEventsList>{event.renderedEventCollections.map((plainEntry, i) => <PlainEventsLine hanging={i === 0 ? false : true}>{plainEntry}</PlainEventsLine>)}</PlainEventsList>
        ): (
          <PlainEventsList>{event.renderedEventCollections.map((plainEntry, i) => <PlainEventsLine hanging={i === 0 ? false : true}>{plainEntry}</PlainEventsLine>)}</PlainEventsList>
        )
      })}
      { !loaded && (
        <LoadingContainer>
          <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
      )}
    </EventsListContainer>
  )
}

export default EventsDisplay