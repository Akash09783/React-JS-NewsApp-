import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
      <h2>Newsmonkey - Top headlines </h2>
      <div className="row">
     <div className= "col-md-4">
     <Newsitems title = "mytitle" description="mydesc" imageUrl="https://techcrunch.com/wp-content/uploads/2023/08/jio.jpeg?resize=1200,675"/>
     </div>
     <div className= "col-md-4">
     <Newsitems title = "mytitle" description="mydesc"/>
     </div>
     <div className= "col-md-4">
     <Newsitems title = "mytitle" description="mydesc"/>
     </div>
 
      
    
       </div>
       
      </div>
    )
  }
}
