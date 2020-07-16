import React from 'react';
import Helmet from 'react-helmet';

import '../assets/main.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Coming Soon." />
        {children}
      </div>
    );
  }
}

export default Layout;
