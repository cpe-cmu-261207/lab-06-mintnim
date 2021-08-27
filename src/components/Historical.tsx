import { useState } from 'react'
import { useHistory } from "react-router-dom"

const Historical = () => {

  const [start, setstart] = useState<any | null>(null) 
  const [end, setend] = useState<any | null>(null)
  let history = useHistory()

  const check = () => {
    if (start > end || start === null || end === null) {
      alert('Please select start date and end date correctly')
    }else{
      history.push(`/history/result?start=${start}&end=${end}`,{a:start,b:end})
  }
}

    return (
        <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e => {setstart(e.target.value)}}></input>
        <span>To date</span>
        <input type='date' onChange={e => {setend(e.target.value)}}></input>
        <br />
        <button onClick={check}>Get data</button>
      </div>   
    )
}

export default Historical