import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About Us/AboutUs.jsx'
import Contact from './components/Contact Us/ContactUs.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
          path: "",
          element: <Home />
          
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github />, 
        loader: githubInfoLoader,
      },
      {
path: "*",
element: <div>404 Not Found</div>
      },
    
    
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router = {router}/>
  </StrictMode>,
)
