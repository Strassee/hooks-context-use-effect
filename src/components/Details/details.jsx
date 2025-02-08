import './details.css';

function Details( {info} ) {

  return (
    <div className="user-details">
      <h3>User Details</h3>
      <div className="user-detail">
        <div className="user-detail-avatar">
          <img src={info.avatar} width="180" alt="avatar" key={info.id} />
        </div>
        <div className="user-detail-name">
          {info.name}
        </div>
        <div className="user-detail-city">
          City: {info.details.city}
        </div>
        <div className="user-detail-company">
          Company: {info.details.company}
        </div>
        <div className="user-detail-position">
          Position: {info.details.position}
        </div>
      </div>
    </div>
  )
}

export default Details;
