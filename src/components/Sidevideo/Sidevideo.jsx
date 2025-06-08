import React, { useEffect, useState } from 'react'
import './Sidevideo.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import vertical_3 from '../../assets/vertical_3.png'
import { API_KEY } from '../../data'
const Sidevideo = () => {

    const [apidata,setapidata] = useState([]);

    const fetchData = async ()=>{
        // const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedvideo_url).then(res=>res.json()).then(data=>setapidata(data.items))
        console.log(apidata);
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='display-video'>

    
            
        
    </div>
  )
}

export default Sidevideo