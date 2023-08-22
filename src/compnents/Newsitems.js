import React, { Component } from 'react'

export class Newsitems extends Component {
    articles = [
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Manish Singh",
          "title": "Jio Financial Services, Reliance's $20 billion spin-off, makes market debut | TechCrunch",
          "description": "For years, the Indian market has been anticipating for a public debut of Reliance Retail and Jio Platforms. But in a surprise move late last year, Mukesh Jio Financial Services will likely offer consumer and merchant lending, payments platform, insurance brok…",
          "url": "https://techcrunch.com/2023/08/20/jio-financial-services-reliances-20-billion-spin-off-makes-market-debut/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/jio.jpeg?resize=1200,675",
          "publishedAt": "2023-08-21T05:04:15Z",
          "content": "For years, the Indian market has been anticipating for a public debut of Reliance Retail and Jio Platforms. But in a surprise move late last year, Mukesh Ambani, Asia’s richest man and chairman of co… [+1341 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Kirsten Korosec",
          "title": "Vinfast takes a wild ride, a robotaxi fallout brews and the IRA one year later | TechCrunch",
          "description": "This week, the transportation newsletter focuses on robotaxi problems in San Francisco, Vinfast's crazy first week on Nasdaq and the IRA.",
          "url": "https://techcrunch.com/2023/08/20/vinfast-takes-a-wild-ride-a-robotaxi-fallout-brews-and-the-ira-one-year-later/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/clean-energy-startups.jpg?resize=1200,675",
          "publishedAt": "2023-08-20T21:17:27Z",
          "content": "The Station is a weekly newsletter dedicated to all things transportation. Sign up here  just click The Station  to receive the newsletter every weekend in your inbox. Subscribe for free. \r\nWelcome b… [+7656 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Mary Ann Azevedo and Christine Hall",
          "title": "A tale of two payments companies | TechCrunch",
          "description": "This past week, we saw two global payments companies — Uruguay's dLocal and the Netherlands' Adyen — release earnings with wildly different results.",
          "url": "https://techcrunch.com/2023/08/20/a-tale-of-two-payments-companies/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/04/GettyImages-155277133.jpg?resize=1200,987",
          "publishedAt": "2023-08-20T04:57:15Z",
          "content": "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. There was plenty going on as usual — with fintech investors sounding off, payments companies se… [+8575 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Tim Stevens",
          "title": "Speed and tech dominated the lawns at Monterey Car Week | TechCrunch",
          "description": "The Pebble Beach Concours d'Elegance is just the cherry on top of a week of events highlighting, celebrating and sometimes even worshiping the automobile.",
          "url": "https://techcrunch.com/2023/08/20/speed-and-tech-dominated-the-lawns-at-monterey-car-week/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/rimac-monterey-GettyImages.jpg?resize=1200,800",
          "publishedAt": "2023-08-20T01:22:59Z",
          "content": "The Pebble Beach Concours d’Elegance is just the cherry on top of a week of events highlighting, celebrating and sometimes even worshiping the automobile. While the lawn on Sunday mostly focuses on t… [+10483 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Kyle Wiggers",
          "title": "This week in AI: Amazon 'enhances' reviews with AI while Snap's goes rogue | TechCrunch",
          "description": "In this edition of TechCrunch's semiregular This Week in AI column: Amazon reviews, Snap roguery, and clever VFX tools.",
          "url": "https://techcrunch.com/2023/08/19/this-week-in-ai-amazon-enhances-reviews-with-ai-while-snaps-goes-rogue/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1285877166.jpg?resize=1200,675",
          "publishedAt": "2023-08-18T21:53:44Z",
          "content": "Keeping up with an industry as fast-moving as AI is a tall order. So until an AI can do it for you, heres a handy roundup of the last weeks stories in the world of machine learning, along with notabl… [+10098 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Christine Hall",
          "title": "Mycoprotein producer Enough raises €40M toward doubling its production capacity | TechCrunch",
          "description": "Now with the Netherlands factory online, Enough is ramping up to produce 10,000 metric tonnes of Abunda per year.",
          "url": "https://techcrunch.com/2023/08/20/mycoprotein-enough-40m-foodtech/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/1166447.jpg?resize=1200,676",
          "publishedAt": "2023-08-18T21:22:03Z",
          "content": "Making protein out of mushrooms is not a new concept; however, Enough believes its technology and the ability to scale production quickly will set it apart.\r\nThe Scotland-based company grabbed 40 mil… [+3994 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Kyle Wiggers",
          "title": "Apple devices spoofed, Musk eggs on Zuckerberg and Better.com goes public | TechCrunch",
          "description": "In this edition of Week in Review (WiR), we cover Apple devices being spoofed, Musk egging on Zuckerberg and Better.com going public.",
          "url": "https://techcrunch.com/2023/08/19/apple-devices-spoofed-musk-eggs-on-zuckerberg-and-better-com-goes-public/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/Better.com_.jpg?w=1080",
          "publishedAt": "2023-08-18T21:16:44Z",
          "content": "Welcome, friends, to Week in Review (WiR), TechCrunch’s regular newsletter covering the major events in tech over the past few days. Haven’t had your eyes glued to the headlines? Not to worry. That’s… [+6425 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Haje Jan Kamps",
          "title": "IP for startups: When (not) to patent your inventions | TechCrunch",
          "description": "Hiring patent counsel is a critical step for inventors seeking to secure and maintain patent protection for their inventions.",
          "url": "https://techcrunch.com/2023/08/20/ip-for-startups-patents/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/ip-series-patents.jpg?resize=1200,675",
          "publishedAt": "2023-08-18T19:57:45Z",
          "content": "When it comes to intellectual property, patents might spring to mind. A good patent can give startups a competitive edge, and once youve been granted one, nobody can come and mess with your technolog… [+1811 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Rebecca Szkutak",
          "title": "VCs should give up on the winner-takes-all approach to investing",
          "description": "VCs shouldn’t get too hung up on a company’s chances of winning an entire category, because most won’t. And that’s fine.",
          "url": "https://techcrunch.com/2023/08/20/theres-no-single-winner-in-any-market/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1314946854.jpg?resize=1200,840",
          "publishedAt": "2023-08-18T19:15:53Z",
          "content": "Venture capital is the business of hitting home runs. But must a startup have the potential to capture the vast majority of market share in its category to earn an investment? I don’t think so.\r\nA fe… [+1768 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Anna Heim",
          "title": "Nailing subscriptions in India | TechCrunch",
          "description": "In this week's Exchange, I'm looking at subscriptions in India from two angles: the consumer market and B2B SaaS.",
          "url": "https://techcrunch.com/2023/08/19/subscriptions-saas-india/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/07/india_tech.jpg?resize=1200,840",
          "publishedAt": "2023-08-18T18:42:11Z",
          "content": "Welcome to the TechCrunch Exchange, a weekly startups-and-markets newsletter. Its inspired by the daily TechCrunch+ column where it gets its name. Want it in your inbox every Saturday? Sign up here.\r… [+812 chars]"
        }
      ]
  constructor(){
    super();
    console.log("hello i am constructor from news component");
    this.state = {
        articles:this.state,
        loading: false

    }
  }
  
    render() {
    let {title,description, imageUrl} = this.props;
    return (
      <div>
      <div class="card" style={{width: "18rem"}}>
  <img src={imageUrl} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href="/newsdetail" class="btn btn-sm btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitems

