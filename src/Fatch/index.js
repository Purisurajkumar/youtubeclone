import React from 'react';
import Display from '../Component/Display'
import Card from '../Component/Card'
import styles from '../Fatch/Fatch.module.css'
class Find extends  React.Component{
 constructor(props){
     super(props)
     this.state={array:[]}
 }
 componentDidMount(){
    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyBQyK6ZhbMeKbxxOp6SB06LfCkSLCkfQMM').then((res)=>{return res.json()}).then((result)=>{this.setState({array:result.items})
    console.log(result)})
 }
 SearchData=(data)=>{
     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&safeSearch=strict&maxResults=15&type=video&key=AIzaSyCr0yZhf__Vl7T79qTNwXcUg6uM2-q6BaY`).then((res)=>{return res.json()}).then((result)=>{this.setState({array:result.items})
     console.log(result)})
 }
  render(){
      return(
          <div>
              <Display inputvalue={this.SearchData}/>
              <div className={styles.container}>
                  {this.state.array.map((data,index)=>{
                      return(
                          <Card key={index} 
                          imgurl={data.snippet.thumbnails.default.url}
                          discrip={data.snippet.title}
                          displaydate={data.snippet.publishedAt}
                          videoid={typeof data.id=='object' ? data.id.videoId : data.id}
                          newarray={this.state.array}/>
                      )
                  })}
              </div>
          </div>
      )
  }
}
export default Find 