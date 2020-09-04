import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';

import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './myproperties.scss';

class Myproperties extends React.Component {
  state = {
    myproperties: [],
    loading: false,
  }

  render () {
    const { myproperties, loading } = this.state;

    return (
      <Layout >
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="title text-center text-danger mt-4 mb-5"><b>Your Properties</b>
              </div>
              <div className="text-right mt-1 mb-1">
                <a role="button" href={`/listmyproperty`} className="btn btn-danger">List my property</a>
              </div>
              <div className="row">
                <div className="col-12">
                  <div><b>My listed properties:</b></div>
                  <div className="row">
                    {myproperties.length > 0 ? myproperties.map((property) => {
                        return (<p>Property X</p>);
                      }) : <p>No listed property</p>}
                  </div>
                  {loading && <p>loading...</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Myproperties;
