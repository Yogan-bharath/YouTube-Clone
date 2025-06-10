import React, { useEffect, useState } from 'react'
import './Feed.css'
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