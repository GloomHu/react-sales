import React from 'react';
import NavLink from './NavLink.react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        
            <header>
                <div className="top-box">
                    <NavLink to="/index"><img src="images/logo.png"/></NavLink>
                    <div className="user"><NavLink to="/userCenter"><i className="iconfont icon-yonghu"></i></NavLink> 
                    </div>
                    <div className="jijia"><NavLink to="/priceEnquiry"><i className="iconfont icon-jijiaqi"></i></NavLink> </div>
                    <div className="shopcart-pop" id="salesCountContainer">0</div>
                </div>
                <div className="top-line"></div>
            </header>
        
    );
  }
}
