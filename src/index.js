import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App'
import { BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import ThemeContextProvider from './contexts/theme-context'
import ThemeSwitch from './pages/User/comp/ThemeSwitch'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <ThemeContextProvider>
      <div className="bg-white text-black dark:bg-black dark:text-white">
      <App />
      <ThemeSwitch />
        </div>
    </ThemeContextProvider>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()