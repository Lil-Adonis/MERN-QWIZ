import React, { useEffect, useState } from 'react'




export default function Quiz() {
    /** next button event handler */
    function onNext(){
    console.log('hiiii')
        }
     

    /** Prev button event handler */
    function onPrev(){
        console.log('hello')
    }
   

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}