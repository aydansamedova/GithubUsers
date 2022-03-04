import React,{useRef, useContext}from 'react'
import { GithubContext } from '../context/Context'
import SDK from '../context/Sdk'

export default function Search() {
  const {request} = useContext(GithubContext)
  console.log(request)
const sdk = new SDK()
  const inputRef=useRef(null)

  const data =async()=>{
    const user = sdk.getUser("samirkarimov")
    console.log( user)
  }

  const submit=(e)=>{
    e.preventDefault();
    data()
  }

  return (
    <div className="content">
    <div className="mb-10 w-3/4 ">
      <form action="" onSubmit={submit} className="flex pr-5 items-center justify-between w-full">
        <div className="flex bg-white px-3 py-1.5  justify-between rounded w-full">
          <input ref={inputRef} type="text"  placeholder="enter username" className="border-none outline-none"/>
          {request> 0 &&   <button className="bg-cyan-700 hover:bg-cyan-200 duration-200 text-white hover:text-cyan-700 font-semibold py-1.5 px-3 rounded" type="submit">Search</button>}
        
        </div>
      
        <h3>Requests: {request}/80</h3>
        </form>
    </div>
    </div>
  )
}
