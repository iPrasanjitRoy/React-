import React, { Component } from 'react';

class NewsItem extends Component {

  render() {
    const { title, description, imageUrl, newsUrl } = this.props; 


    return (
      <>
        <div className='my-4'> 
          <div className="card" style={{ width: "18rem" }}> 
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}.....</p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary"> Reda More </a>
            </div>
          </div>





        </div>

      </>

    );
  }
}

export default NewsItem;
