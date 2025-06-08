import React, { useEffect, useState } from 'react'
import './Videoplay.css'
import video from '../../assets/video.mp4'
import profile from '../../assets/profile.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import three from '../../assets/3.png'
import download from '../../assets/download.png'
import {API_KEY} from '../../data'
import { value_converter } from '../../data'
import moment from 'moment'

const Videoplay = ({videoId}) => {


  const [apidata,setdata] = useState(null);
  const [channeldata,setchanneldata] = useState(null)
const [commentdata,setcommentdata] = useState([])
  const fetchvideodata = async ()=>{
      const videoDetails_utl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
          const res = await fetch(videoDetails_utl);
    const data_api = await res.json();
    setdata(data_api.items[0])
    console.log(apidata.snippet.title);
  }

  const fetchotherdata = async ()=>{
      const channel_data_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`
      const res = await fetch(channel_data_url);
      const otherdata = await res.json();
      setchanneldata(otherdata.items[0])

      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
      await fetch(comment_url).then(res=>res.json()).then(data=>setcommentdata(data.items))

      }

  

  useEffect(()=>{
    fetchvideodata();
  },[])
  useEffect(()=>{
    fetchotherdata();
  },[apidata])

  return (
    <div className='video-container'>

      {/* <video src={video} controls></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apidata ? apidata.snippet.title:'title here'}</h3>
<div className='main-display'>

      <div className='channel-sec'>
        <div className='channel-info'>
          <img src={channeldata?channeldata.snippet.thumbnails.default.url:profile}/>

          <div className='channel-details'>
          <h4 className='channel-name'>{apidata ? apidata.snippet.channelTitle:'Channel Title'}</h4>
          <p className='channel-sub'>{channeldata?value_converter(channeldata.statistics.subscriberCount):'1M'} subscribers</p>
          </div>
        <button className='sub-btn'>Subscribe</button>
        </div>
      </div>
      
      <div className='likes'>
          <div className='Likes'>
            <div className='like'>
            <img  src={like}/>
            <h4>{apidata?value_converter(apidata.statistics.likeCount):155}</h4>
            </div>
          <img src={dislike} className='dislike'/>
          </div>

          <div className='share'>
            <img src={share} />
            <h4>Share</h4>
          </div>

          <div className='download-sec'>
            <img src={download}/>
            <h4>Download</h4>
          </div>
          <div  className='three'>
          <img src={three}/>
          </div>
      </div>
      </div>



      <div className='discription'>
        <p className='dis-info'>{apidata ? value_converter(apidata.statistics.viewCount):'Channel Title'} views  {apidata ? moment(apidata.snippet.publishedAt).fromNow():'1 year ago'}</p>
        <p>{apidata?apidata.snippet.description.slice(0,250):'Description'}</p>
      </div>

      <div className='comments'> 
        <h3>{apidata?value_converter(apidata.statistics.commentCount):102} Comments</h3>

      {commentdata.map((item,index)=>{
          return (
               <div key={index} className='comment'>
          <img className='profile' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
          <div className='comment-content'>
              <h5>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>2 months ago</span></h5>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              
              <div className='dis-likes'>
                <div className='like-dislike-sec'>
                  <img className='like' src={like}/>
                  <p>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</p>
                </div>
                <img className='dislike' src={dislike}/>
                <p>Replay</p>
              </div>
          </div>
        </div>

          )
      })}

       
        




      </div>
    </div>
  )
}

export default Videoplay