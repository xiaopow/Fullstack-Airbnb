import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';

import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './bookingsuccess.scss';

class Bookingsuccess extends React.Component {
  state = {
    property: {},
    loading: false,
  }

  componentDidMount() {
    console.log(this.props.booking_id);
  }

  render () {
    const { property, loading } = this.state;
    if (loading) {
      return <p>loading...</p>;
    };

    return (
      <Layout >
        <div id="feedPage">Successfully Booked !</div>
      </Layout>
    )
  }
}
export default Bookingsuccess;
