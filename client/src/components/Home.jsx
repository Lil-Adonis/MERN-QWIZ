import React, { useRef } from 'react'

const Home = () => {
    const inputRef = useRef (null)
  return (
    <div>
        <h1>Welcome, Quiz Application</h1>
        <ol>
        <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>
        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>
    </div>
  )
}

export default Home