import React from 'react';
import{useHistory} from 'react-router-dom'
import styles from '../Card/Card.module.css'
const Card=({imgurl,discrip,videoid,displaydate,newarray,contant3,image,heading,picture})=>{
    const history=useHistory()
   const onchange=()=>{
        const newdate=new Date(displaydate)
        console.log(newdate)
    history.push(`/${videoid}`, {id:videoid,dis:discrip,date:newdate.toLocaleString(),array:newarray})
    }
    return(
            <div className={`${styles.contant} ${contant3}`}>
            <div className={`${styles.imgbox} ${image}`}><img className={`${styles.pic} ${picture}`} src={imgurl} onClick={onchange} /></div>
            <h1 className={`${styles.textbox} ${heading}`}>{discrip}</h1>
            </div>
        
    )
}
export default Card