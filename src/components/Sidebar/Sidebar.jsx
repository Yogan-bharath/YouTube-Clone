import React from 'react'
import './Sidebar.css'
import home from '../../assets/home_icon.png'
import short from '../../assets/shorts.png'
import sub from '../../assets/sub.png'
import gaming from '../../assets/gaming.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import music from '../../assets/music.png'
import tech from '../../assets/tech.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'

const Sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?'':'small-sidebar'}`}>
      <div className={`shortcut-links `}>
        <div className={`side-link ${category===0?'active':''}`} onClick={()=>{setcategory(0)}}>
          < img className='img' src={home} />
          <p>Home</p>
        </div>
        <div className={`side-link`} >
          < img className='img' src={short}/>
          <p>Shorts</p>
        </div>
        <hr/>
        <div className='explore'>

          <h3 className='Explore'>Explore</h3>

          <div className={`side-link ${category===20?'active':''}`} onClick={()=>{setcategory(20)}}>
          < img className='img' src={gaming}/>
          <p>Gaming</p>
          </div>

          <div className={`side-link ${category===10?'active':''}`} onClick={()=>{setcategory(10)}}>
          < img className='img' src={music}/>
          <p>Music</p>
        </div>

        <div className={`side-link ${category===2?'active':''}`} onClick={()=>{setcategory(2)}}>
          < img className='img' src={automobiles}/>
          <p>Automobiles</p>
        </div>
        
        <div className={`side-link ${category===17?'active':''}`} onClick={()=>{setcategory(17)}}>
          < img className='img' src={sports}/>
          <p>Sports</p>
        </div>

        <div className={`side-link ${category===28?'active':''}`} onClick={()=>{setcategory(28)}}>
          < img className='img' src={tech}/>
          <p>Tech</p>
        </div>
        
        
        <div className={`side-link ${category===22?'active':''}`} onClick={()=>{setcategory(22)}}>
          < img className='img' src={blogs}/>
          <p>Blogs</p>
        </div>
        
        <div className={`side-link ${category===25?'active':''}`} onClick={()=>{setcategory(25)}}>
          < img className='img' src={news}/>
          <p>News</p>
        </div>

        </div>
 <hr/>
      <div className='sub-list'>
        <h3>Subscribed</h3>

        <div className='side-link'>
          < img className='img' src='https://i.pinimg.com/originals/cc/f1/dd/ccf1dd8acb21c00c41235d5f6094a5ec.jpg'/>
          <p>Mr.Beast</p>
        </div>
        <div className='side-link'>
          < img className='img' src='https://yt3.ggpht.com/ytc/AAUvwnjpa2md8Bfk-LdYllfDdWWdF6CpKebvAlI5NifS6Q=s900-c-k-c0x00ffffff-no-rj'/>
          <p>Justin Bieber</p>
        </div>
        <div className='side-link'>
          < img className='img' src='https://blackhattalent.com/wp-content/uploads/2024/07/Nas-Daily.jpg'/>
          <p>Nas Daily</p>
        </div>
      </div>






      </div>
    </div>
  )
}

export default Sidebar