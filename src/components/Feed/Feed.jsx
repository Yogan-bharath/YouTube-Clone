import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import  {API_KEY} from '../../data/'


import { Link } from 'react-router-dom'
import { value_converter } from '../../data'
import moment from 'moment'
const Feed = ({category}) => {

    const [data,setdata] = useState([])
 const fetchdata = async ()=>{
    const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${50}&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    const res = await fetch(videolist_url);
    const youtube_data = await res.json();
    setdata((prev)=>youtube_data.items)
    
}
useEffect(()=>{
    fetchdata();
},[category])

  return (
    <>
    <div className='feed'>

        {data.map((item,index)=>{
            return(
    <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.high.url} alt=''/>
            <div className='card-info'>
                <div className='info'>
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} views {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </div>
    </Link>
            )
        })}
        
    </div>
    </>
  )
}

export default Feed