import React, { Component } from 'react'
import './css/comp.css';
import './css/item.css'

export class NewsItem extends Component {

  render() {
    let { title, disc, imgurl, newsurl, author, publishTime, source } = this.props // declaring the props in class based component {destructuring of props }
    title = title.length > 25 ? title.substring(0, 25) + "..." : title
    disc = disc?.length > 30 ? disc.substring(0, 30) + "..." : disc
    return (
      <>



        {/* target blank is used to open a page in new tab */}
        <a id="itemlink" href={newsurl} target="_blank">
          <div id='card' class="card  p-2 mb-5 bg-body-tertiary rounded" style={{ width: "20rem" }}>  {/* the style should be changed acording to the jsx */}

            <img src={imgurl} class="card-img-top newspic m" alt="..." />
            <div class="card-body" >
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{disc}......</p>

              {/* <footer class="blockquote-footer"> by {author ? author : source} <br></br> {new Date(publishTime).toUTCString()} </footer> */}
              <footer class="blockquote-footer"> by {author ? author : source}  </footer>



            </div>
          </div>
        </a>
      </>
    )
  }
}
export default NewsItem
