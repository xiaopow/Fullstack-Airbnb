import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import Bookingdetails from '@src/mybookings/bookingdetails';

import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './mybookings.scss';

class Mybookings extends React.Component {
  state = {
    bookings: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`/api/mybookings`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          bookings: data.bookings,
        })
      })
  }

  render () {
    const { bookings, loading } = this.state;

    return (
      <Layout >
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div>Your upcoming bookings:</div>
              <div className="row">
                {bookings.length > 0 ? bookings.map((booking) => {
                  return (<Bookingdetails
                    key={booking.id}
                    booking={booking}
                    />);
                  }) : <p>No booking here</p>}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Mybookings;
