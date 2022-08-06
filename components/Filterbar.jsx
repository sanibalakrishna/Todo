import React from 'react'
import {FaTasks} from 'react-icons/fa'
import {BsFilter,BsSortAlphaUpAlt} from  'react-icons/bs'

function Filterbar() {
  return (
    <div><div className="flow-root border border border-slate-500 rounded-md mt-4 ">
    <div className="float-left">
      <a className="btn btn-ghost normal-case text">Created Yesterday</a>
    </div>
    <div className="float-right">
      <ul className="menu menu-horizontal p-0">
        <li><a><FaTasks/>All Tasks</a></li>
        <li tabindex="0">
          <a>
            <BsFilter/> Filter
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-base-100">
            <li><a>completed</a></li>
            <li><a>uncomplted</a></li>
          </ul>
        </li>
        <li><a><BsSortAlphaUpAlt/>Sort</a></li>
      </ul>
    </div>
  </div></div>
  )
}

export default Filterbar