import React from 'react'
import { GeneralNavigations, MainNavigations } from '../constants/navigation'

const MobileSideNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav
      className={`bg-primary h-screen p-4 left-0 block transition-all duration-300 transform ${
        isOpen ? '-translate-x-full' : ''
      }`}
    >
      <div className="space-y-8">
        <img src="/images/dukka.svg" alt="dukka logo" />
        <div className="space-y-4 ">
          <p>Main pages</p>
          <ul className="space-y-4">
            {MainNavigations.map((nav, idx) => (
              <li
                key={idx}
                className={`hover:bg-white p-3 ${
                  nav.name.toLowerCase() === 'balances' ? 'bg-white' : ''
                }`}
              >
                <a href="/" className="flex gap-x-4">
                  <img src={`images/${nav.icon}.svg`} alt={nav.name} />{' '}
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p>General</p>
          <ul className="space-y-4">
            {GeneralNavigations.map((nav, idx) => (
              <li key={idx} className="hover:bg-white p-3">
                <a href="/" className="flex gap-x-4">
                  <img src={`images/${nav.icon}.svg`} alt={nav.name} />{' '}
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MobileSideNav
