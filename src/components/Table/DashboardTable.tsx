import React, { FC, useState } from 'react'
import Table from './Table'
import { PaymentHistory } from '../../constants/table'
import { TableColumn } from 'react-data-table-component'
import { PaymentHistoryRow } from './DashboardTable.types'

const columns: TableColumn<PaymentHistoryRow>[] = [
  {
    name: 'Transaction ID',
    selector: (row) => row.id,
  },
  {
    name: 'Source',
    selector: (row) => row.source,
  },
  {
    name: 'Date',
    selector: (row) => row.date,
  },
  {
    name: 'Amount',
    selector: (row) => row.amount,
  },
]
const DashboardTable: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredData, setFilteredData] = useState<any[]>(PaymentHistory)

  const handleSearch = () => {
    const filtered = PaymentHistory.filter((item) =>
      item.id.toString().includes(searchTerm),
    )
    setFilteredData(filtered)
  }
  return (
    <div className=" w-11/12 mt-12 space-y-4">
      <div className="flex justify-between md:flex-row flex-col space-y-2 md:space-y-0">
        <p className="font-bold">Payment History Table</p>
        <div className="flex md:space-x-2 md:flex-row flex-col space-y-2 md:space-y-0">
          <div className="relative">
            <input
              placeholder="Search for Transaction ID"
              className="border rounded-md text-sm w-80 px-1 h-10 "
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              src="/images/search.svg"
              alt="search icon"
              className="absolute top-3 right-14 md:right-3"
            />
          </div>
          <button
            onClick={handleSearch}
            className="font-medium bg-primary text-white p-2 rounded-md w-24"
          >
            Search
          </button>
        </div>
      </div>
      <Table data={filteredData} columns={columns} />
    </div>
  )
}

export default DashboardTable
