import React from 'react';
import ReactDOM from 'react-dom';

import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './bookingdetails.scss';

class Bookingdetails extends React.Component {
  state = {
    bookingdetails: {},
  }

  componentDidMount() {
    fetch(`/api/bookings/${this.props.booking.id}`)
      .then(handleErrors)
      .then(data => {
        console.log(data);
        this.setState({
          bookingdetails: data.booking,
        })
      })
  }

  render () {
    const { booking } = this.props;
    const { id } = booking;
    const { bookingdetails } = this.state;
    const {
      start_date,
      end_date,
      property,
    } = bookingdetails;

    if (!bookingdetails) {
      return null;
    }

    return (
      <div className="col-12">
        <p>{start_date} and {end_date} and {property.title}</p>
      </div>
    )
  }
}

export default Bookingdetails;
