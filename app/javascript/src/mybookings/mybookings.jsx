import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import Bookingdetails from '@src/mybookings/bookingdetails';

import moment from 'moment';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './mybookings.scss';

class Mybookings extends React.Component {
  state = {
    bookings: [],
    loading: true,
    currentDateTime: moment().format("YYYY-MM-DD"),
  }

  componentDidMount() {
    fetch(`/api/mybookings`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          bookings: data.bookings,
        })
      })
      console.log(this.state.currentDateTime);
  }

  render () {
    const { bookings, loading, currentDateTime } = this.state;

    return (
      <Layout >
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div><b>Your upcoming bookings:</b></div>
              <div className="row">
                {bookings.length > 0 ? bookings.map((booking) => {
                  if (booking.start_date >= this.state.currentDateTime) {
                    return (<Bookingdetails
                      key={booking.id}
                      booking={booking}
                      />);
                    }
                  }) : <p>No upcoming booking</p>}
              </div>
              <hr />
              <div><b>Your past bookings:</b></div>
              <div className="row">
                {bookings.length > 0 ? bookings.map((booking) => {
                  if (booking.start_date < this.state.currentDateTime) {
                    return (<Bookingdetails
                      key={booking.id}
                      booking={booking}
                      />);
                    }
                  }) : <p>No upcoming booking</p>}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Mybookings;
