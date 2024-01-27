import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import MobileSideNav from './MobileSideNav'

const getOrdinalSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return 'th'
  }

  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

const Header = ({ title }: { title: string }) => {
  const [formattedDate, setFormattedDate] = useState<string>('')
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }

    const today: Date = new Date()
    const day: number = today.getDate()
    const ordinalSuffix: string = getOrdinalSuffix(day)

    options.day = undefined // Remove 'day' to avoid repetition
    const formattedDate: string = `${day}${ordinalSuffix} ${today.toLocaleDateString(
      'en-US',
      options,
    )}`

    setFormattedDate(formattedDate)
  }, [])

  return (
    <header className=" fixed z-20 w-full bg-white  py-5 px-3 md:px-10">
      <div className="flex space-x-6 justify-between pl-0 md:pl-72 ">
        <div className="space-y-1">
          <p className="font-medium">{title}</p>
          <p className="text-grey">Today, {formattedDate}</p>
        </div>
        <div className="flex space-x-2 md:space-x-5">
          <img
            src="/images/notification.svg"
            alt="notifictaion icon"
            className="w-8"
          />
          <img src="/images/user.svg" alt="user icon" className="w-8" />
          <div className="md:hidden flex items-center">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              easing="ease-in"
              duration={0.4}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-full">
          <MobileSideNav isOpen={isOpen} />
        </div>
      )}
    </header>
  )
}

export default Header
