import React from 'react';
import styles from './Display.module.css'
class Display extends React.Component{
    constructor(props){
        super(props)
        this.state={searchitem:''}
    }
    Handlechange=(e)=>{
        this.setState({searchitem:e.target.value})
    }
    Handleclick=()=>{
        this.props.inputvalue(this.state.searchitem)
        this.setState({searchitem:""}) 
    }  
         render(){
        return(
            <div className={styles.container}>
                <div className={styles.contant}>
               <div className={styles.iconbox}> <img className={styles.icon} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSM9gBXDI0hWWpW2NUkkTYtbtExAqo51Ao8A&usqp=CAU'/></div>
       <div className={styles.searchbox}>
        <input className={styles.textbox} type='text' name='searchitem' placeholder='Search....' value={this.state.searchitem}onChange={this.Handlechange}/>
           <button className={styles.buttonbox} onClick={this.Handleclick}>Search</button>
       </div>
       </div>
       </div>
        
        )
    }
}
export default Display