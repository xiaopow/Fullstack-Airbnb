import React from 'react';
import ReactDOM from 'react-dom';

import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './bookingdetails.scss';

class Bookingdetails extends React.Component {
  state = {
    bookingdetails: null,
  }

  componentDidMount() {
    fetch(`/api/bookings/${this.props.booking.id}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          bookingdetails: data.booking,
        })
      })
  }

  render () {
    const { booking } = this.props;
    const { id } = booking;
    const { bookingdetails } = this.state;

    if (!bookingdetails) {
      return null;
    }

    const {
      start_date,
      end_date,
      property,
    } = bookingdetails;
    const {
      title,
      city,
      country,
      image_url,
    } = property;

    return (

      <div className="col-4 col-lg-3 mb-4 property">
        <a href="#" className="text-body text-decoration-none">
          <p className="text-uppercase mb-0 text-secondary"><small><b>{city}, {country}</b></small></p>
          <div className="property-image mb-1 rounded" style={{ backgroundImage: `url(${image_url})` }} />
          <h6 className="mb-0">{title}</h6>
          <p className="mb-0"><small>Booked from {start_date} to {end_date} </small></p>
        </a>
      </div>
    )
  }
}

export default Bookingdetails;
