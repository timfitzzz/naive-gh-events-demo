import axios from "axios";
import { useState, useEffect } from "react"

const useEvents = () => {

  // source: { type: 'default' || 'user' || 'input', value?: string }
  let [error, setError] = useState(null)
  let [source, setSource] = useState({type: 'default'})
  let [events, setEvents] = useState(null)
  // let loaded = useState(false)

  const selectSource = ({type, value}) => {
    if (type === 'input' && !value && events) {
      setSource({ type, value: JSON.stringify(events, null, 2)})
    } else {
      setSource({ type, value })
    }
  }

  useEffect(()=> {

    function validateTextInputAndUpdateEvents() {
      let parsedEvents;
  
      if (source.type === 'input') {
        try {
          parsedEvents = JSON.parse(source.value)
        } catch (e) {
          setError('JSON invalid')
        }
        setError(null)
        setEvents(parsedEvents)
      }
    }

    if (source.type !== 'input') {
      axios.request(source.type === 'user' && source.value ? `https://api.github.com/users/${source.value}/events?per_page=100` 
                                                          : 'https://api.github.com/events?per_page=100'
      ).then(data =>  {
        if(data.data.length < 1) {
          setError('No events in last 90 days')
        }
        setEvents(data.data)
        // setLoaded(true)
      }, err => {
        if(err.response.status === 404) {
          setEvents(null)
          // setLoaded(true)
          setError('GitHub user not found')
        } else if (err.response.status === 403) {
          setEvents(null)
          // setLoaded(true)
          setError('403, API limits likely exceeded')
        }
      })
    } else {
      validateTextInputAndUpdateEvents()
    }
  }, [source])

  return [events, source, error, selectSource]
}

export default useEvents