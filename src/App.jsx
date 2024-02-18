import './App.css'
import AppRoutes from './AppRoutes'
import { useState } from 'react'
import Sidebar from './Shared/Sidebar/Sidebar'
import Navbar from './Shared/Navbar/Navbar'
import MobileNav from './Shared/Navbar/MobileNav'
import Footer from './Shared/Footer/Footer'

function App() {


  return (
    <div className='font-openSans text-[rgb(4,10,36)] h-auto  '>
      <div className='flex flex-col '>
        <Navbar />
        {/* <div className='  w-2 h-[2px] border-b border-gray-500'></div> */}
        <div className='flex flex-row bg-[#fff]  '>


          <div className="min-h-[100vh] h-full pl-4  overflow-x-hidden overflow-y-auto w-full ">
            <AppRoutes />
          </div>
        </div>

        <Footer />

      </div>

    </div>

  )
}

export default App
