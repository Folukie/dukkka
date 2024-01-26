import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PaymentHistory } from '../constants/table'

const DashboardCard = () => {
  const [exchangeRates, setExchangeRates] = useState<any>(null)
  const [selectedCurrency, setSelectedCurrency] = useState<string>('NGN')

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const apiKey = '919e818af2f90e2642435898'
      const apiUrl = `https://v6.exchangerate-api.com/v6/919e818af2f90e2642435898/latest/NGN`

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'x-rapidapi-key': apiKey,
          },
        })
        setExchangeRates(response.data.conversion_rates)
      } catch (error) {
        console.error('Error fetching exchange rates:', error)
      }
    }

    fetchExchangeRates()
  }, [selectedCurrency])

  const totalAmount: number = PaymentHistory.reduce(
    (accumulator, payment) => accumulator + payment.amount,
    0,
  )
  return (
    <div className="flex border rounded-lg w-max md:flex-row flex-col mt-24 md:mt-0">
      <div className=" p-4 md:w-72 h-48 md:h-auto">
        <div className="flex py-2 justify-between items-center">
          <p className="text-primary text-sm font-light">
            Total account balance
          </p>
          <select
            className="bg-lightgrey rounded-md p-1 text-sm"
            onChange={(e) => setSelectedCurrency(e.target.value)}
            value={selectedCurrency}
          >
            <option>NGN</option>
            <option>KES</option>
            <option>USD</option>
            <option>ZMW</option>
            <option>AED</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
        <hr />

        <div className=" space-y-2 py-4">
          <h1 className="text-4xl font-bold">
            <span className="font-normal text-xs">
              {exchangeRates ? selectedCurrency : 'NGN'}
            </span>
            {exchangeRates
              ? (totalAmount * exchangeRates[selectedCurrency]).toFixed(2)
              : totalAmount}
          </h1>
          <p className="text-grey">
            1 NGN = {exchangeRates && exchangeRates[selectedCurrency]}{' '}
            {selectedCurrency}
          </p>
        </div>
      </div>
      <div className="bg-lightgrey rounded-lg h-48 md:h-auto p-4 md:w-72">
        <div className="py-3 items-center">
          <p className="text-primary text-sm font-light">Funds on hold</p>
        </div>{' '}
        <hr />
        <div className="py-4">
          <h1 className="text-4xl font-bold">₦484,871</h1>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
