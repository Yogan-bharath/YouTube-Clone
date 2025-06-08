import Navbar from "./components/Navbar/Navbar"
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from "./pages/Video/Video"
import { useState } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
const App = () => {

  const [sidebar,setsidebar] = useState(true)
  return (
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categorId/:videoId" element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App