import React, { FC, ReactNode } from 'react'
import SideNav from '../Navigations/SideNav'
import Header from '../Navigations/Header'

interface DashboardLayoutProps {
  children: ReactNode
  title: string
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, title }) => {
  return (
    <div className="relative">
      <Header title={title} />
      <div className="md:flex">
        <SideNav />
        <div className=" h-full py-8 text-primary-dark flex flex-col flex-1 overflow-y-auto md:ml-16 md:w-11/12 mx-auto md:mt-24 px-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
