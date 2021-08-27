import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from 'react'

type cointype = {
  bpi: any
  THB: any
  time: any
}

const Current = () => {

  const [coin, setcoin] = useState<cointype | null>(null)

	useEffect(() => {

		setcoin(null)
		
		axios.get(`https://api.coindesk.com/v1/bpi/currentprice/thb.jsonnpm`)
			.then((resp: AxiosResponse<cointype>) => {
				setcoin(resp.data) 
			})
			.catch(err => console.log(err))
	}, [])

    return (
        <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Current price</p>
        {coin === null ? <p className='text-2xl'>loading ...</p> : <p className='text-2xl'>{(coin.bpi.THB.rate_float).toLocaleString()} THB</p>}
        <p> (Last updated {coin?.time.updated}) </p>
      </div>
      
   
    )
}

export default Current