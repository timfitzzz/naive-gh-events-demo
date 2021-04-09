import { DateTime } from "luxon"
import { useState } from "react"

export const useRenderOptions = () => {

  let [options, setOptions] = useState({
    sortBy: 'date',
    collapse: true,
    dateSummaries: false,
    dateContent: false,
    groupByDays: 7,
    groupStartDay: 0,
    startDate: new Date(1/1/1970),
    md: true,
    omitContent: false,
    indentContent: true,
    dateTimeFormatOptions: DateTime.DATE_FULL,
    newLinesBetween: true,
    reverseSortEvents: false,
    markPrivate: false,
    privateMarker: 'Ꙫ',
    omitPrivateLinks: false,
    italicizePrivateLinks: false
  })

  const changeOptions = (newOptionsFragment) => {
    setOptions(Object.assign({}, options, newOptionsFragment))
  }

  return [options, changeOptions]

}

export default useRenderOptions