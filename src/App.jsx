import { useState } from 'react'
import './App.css'
import Overview from './Components/Overview/Overview'
import Completed from './Components/Completed/Completed'
import Pending from './Components/Pending/Pending'
import CloseAccount from './Components/CloseAccount/CloseAccount'

function App() {
  const [changeTab, setChangeTab] = useState("Pending")

  return (
    <>
      <div className='background'>
        <div class="main-container">
          <div className="left">
            <Overview />
          </div>
          <div className="right">
            <Pending />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
