import React from 'react'
import Navbar from './Navbar'
import Navbarnext from './Navbarnext'
import Filterbar from './Filterbar'
import Card from './Card'

import Scrollcards from './Scrollcards'

function Mainpart() {
  return (
    <div className='flex flex-col mx-4'>
        <div className='h-1/6'>
        <Navbar/>
        </div>
        <div className='h-1/6'>
        <Navbarnext/>
        </div>
        <div className='h-1/6'>
        <Filterbar/>  
        </div>
        <div className='flex'>
        
         <Scrollcards title='Todo'/>
         <Scrollcards title='Doing'/>
         <Scrollcards title='Done'/>
        </div>
        
       
        </div>
  )
}

export default Mainpart