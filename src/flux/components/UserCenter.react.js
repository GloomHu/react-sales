import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        
             <div>
                <h2>用户中心</h2>
                <p><Link to="/index">Return to the homepage</Link></p>
            </div>
        
    );
  }
}
