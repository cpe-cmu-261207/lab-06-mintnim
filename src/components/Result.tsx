import { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Result = () => {

  const [error, seterror] = useState<boolean>(false)
  const [coin, setcoin] = useState<Record<string,number> | null>(null)
  let history:any = useHistory().location
  let a:any = history.state.start
  let b:any = history.state.end

	useEffect(() => {

		setcoin(null)
		
		axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${a}&end=${b}`)
			.then((resp: AxiosResponse<Record<string,number>>) => {
				setcoin(resp.data) 
			})  
			.catch(err => seterror(true))
	}, [])

  const createlist = () => {
    
  }

    return (
        <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Historical price</p>
        {coin === null && error === false ? <p className='text-2xl'>loading ...</p> : <p></p>}
        {error === true ? <p className='text-2xl text-red-500'>There was an error. Please try again later.</p> : <p></p>}
        {coin === null ? <p></p> : <p className='text-xl font-semibold'> ( From {a} To {b})</p>}
        {coin === null ? <p></p> : <p className='text-2xl'>{(12).toLocaleString()} THB</p>}
        <ul>
          {/* <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
          <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
          <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li> */}
        </ul>
      </div>
   
    )
}

export default Result