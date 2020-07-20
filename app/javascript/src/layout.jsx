import React from 'react';
const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-header">
          <a href="/"><span className="navbar-brand mb-0 h1 text-danger">Airbnb</span></a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle text-danger btn-lg" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-user-circle-o text-danger" aria-hidden="true"></i></a>
              <ul className="dropdown-menu row dropdown-menu-right" role="menu">
                <li ><a href="#" className="text-secondary username mx-3">Log In</a></li>
                <div className="dropdown-divider"></div>
                <li ><a href="#" className="text-secondary mx-3">Host your home</a></li>
                <div className="dropdown-divider"></div>
                <li ><a href="#" className="text-secondary mx-3">Your Bookings</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
      <footer className="p-3 bg-light">
        <div>
          <p className="mr-3 mb-0 text-secondary">Airbnb Clone</p>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Layout;
