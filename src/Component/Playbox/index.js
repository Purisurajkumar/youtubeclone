import React from 'react';
import {useHistory} from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import Card from '../Card'
import styles from './Playbox.module.css'
function Playlist(){
    const Location=useLocation()
    console.log(Location)
    const history=useHistory()
    const handlechange=()=>{
        history.push('/')
    }
  return(
    <div className={styles.container}>
      <div className={styles.home}><button className={styles.back} onClick={handlechange}>HOME</button></div>
      <div className={styles.contant1}>
      <div className={styles.framebox}> <iframe className={styles.image} src={`https://www.youtube.com/embed/${Location.state.id}`}/></div>
    <p className={styles.date}>{Location.state.date}</p>
    <h1 className={styles.text}>{Location.state.dis}</h1>
    </div>
    <div className={styles.contant2}>{Location.state.array.filter((item)=>{return(item.id!=Location.state.id)}).map((data,index)=>{
        return(
            <Card key={index} 
            imgurl={data.snippet.thumbnails.default.url}
            discrip={data.snippet.title}
            displaydate={data.snippet.publishedAt}
            videoid={typeof data.id=='object' ? data.id.videoId : data.id}
            newarray={Location.state.array}
            contant3={styles.contant}
            image={styles.imagebox}
            picture={styles.pic}
            heading={styles.textbox}/>
        )
    })}</div>
 </div> 
  )
}
export default Playlist