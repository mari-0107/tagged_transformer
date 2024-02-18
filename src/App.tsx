import { useState } from 'react'
import './App.css'
import WorkSpace from './components/WorkSpace'

function App() {
 

  return (
    <>
    <section className='flex w-full bg-slate-900 h-auto flex-col items-center justify-center min-h-screen '>
        <h1 className='header text-center text-5xl text-cyan-200 font-bold p-10 mb-10'>Tagged Transformer</h1>
        <WorkSpace />
    </section>
     
    </>
  )
}

export default App
