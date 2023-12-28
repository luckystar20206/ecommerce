import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Hero from './components/Home/Hero'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Hero/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/shop',
          element: <Shop/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
