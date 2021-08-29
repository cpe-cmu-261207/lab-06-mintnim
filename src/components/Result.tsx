import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Result = () =>{
  let query = useQuery();
  let start = query.get("start")
  let end = query.get("end")
  
  const [coin,setcoin] = useState<string[]>()
  const [error, seterror] = useState(false)
 
  useEffect(()=>{
      axios.get("https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start="+start+"&end="+end)
      .then(resp =>{ 
          let list = []
          for (const [key, value] of Object.entries(resp.data.bpi)) {
              list.push(`${key} - ${Number(value).toLocaleString()} THB`)
          }
          setcoin(list)
    
      })
      .catch(err => seterror(true))
  },[])

    return (
        <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Historical price</p>
        {coin === null && error === false ? <p className='text-2xl'>loading ...</p> : <p></p>}
        {error === true ? <p className='text-2xl text-red-500'>There was an error. Please try again later.</p> : <p></p>}
        {coin === null || error === true ? <p></p> : <p className='text-xl font-semibold'> ( From {start} To {end})</p>}
        {coin?.map(x => <li className='text-xl'>{x} THB</li> )}
      </div>
   
    )
}

export default Result