import React from 'react'
import {useState} from 'react'
import {FaRegShareSquare} from 'react-icons/fa'
import Avatar from '../components/Avatar'

function Navbar() {
  const [text,setText] = useState('');
  const handleOnChange= (e) =>{
    setText(e.target.value)
  }
  return (
    
    <div className="navbar bg-base-100  rounded-lg pr-4 ">
      <div className="flex-1">
       <a className="btn btn-ghost normal-case text-xl">Todo App</a>
      </div>
      <div className='flex-1 justify-evenly'>
       <Avatar/>
       <button className='btn btn-active btn-ghost normal-case'><FaRegShareSquare/>&nbsp;Share</button>
      </div>
      <div className="flex-none gap-2">
        
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
           <img src="https://placeimg.com/80/80/people" />
          </div>
          </label>
          <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
   
    
  
  )
}

export default Navbar