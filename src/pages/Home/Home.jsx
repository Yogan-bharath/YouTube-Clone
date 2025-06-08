import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
const Home = ({sidebar}) => {
  const [category,setcategory] = useState(0);
  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
    <div className={`contener ${sidebar?"":'large-contener'}`}>
      <Feed category={category}/>
    </div>
    </>
  )
}

export default Home