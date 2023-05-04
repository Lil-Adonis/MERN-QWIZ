import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

// React Routes

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home></Home>
  },
  {
    path : '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path : '/result',
    element: <Result></Result>
  },
])

function App() {

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
