import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
      <div class="card" style={{width: "18rem"}}>
  <img src="https://techcrunch.com/wp-content/uploads/2023/08/jio.jpeg?resize=1200,675" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href="/newsdetail" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitems

