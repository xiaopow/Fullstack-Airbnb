import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import PropertyWidget from './propertyWidget';

import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './listmyproperty.scss';

class Listmyproperty extends React.Component {

  render () {

    return (
      <Layout >
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="title text-center text-danger mt-4 mb-5"><b>List your property</b>
              </div>
              <PropertyWidget />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Listmyproperty;
