import Head from 'next/head'
import Script from 'next/script'
import Sidebar from '../components/Sidebar'

import {useState} from 'react'
import Mainpart from '../components/Mainpart'
import Addtask from '../components/Addtask'

export default function Home() {
  const [sidebar,setSidebar] =useState(true);
  const handleSidebar= () =>{
    setSidebar(!sidebar);
    
  }
  return (
    <div  data-theme="light" className='h-screen' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <main className='flex flex-row '>
        <div className='w-1/6'>
         <Sidebar onsidebar={handleSidebar} sidebar={sidebar}/>
        </div>
        
        <div className='w-5/6'>
         <Mainpart />
        </div>
       
        
        
         
       
         
       
        
        
      </main>
      <Script src='<script src="node_modules/preline/dist/hs-ui.bundle.js"></script>'/>
    </div>
  )
}
