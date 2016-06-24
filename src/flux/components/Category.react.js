import React from 'react';
import SkuAction from '../actions/SkuAction';
import NavLink from './NavLink.react';
import categoryData  from '../source/categoryData';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    // this.state={categoryId:0}
        // const { categoryId } = this.props.params;
        // console.debug(...this.props.params)
  }
   componentDidMount() {
        console.debug('开始触发->路由：')
        // const { categoryId } = this.props.params;
        // console.debug(categoryId)
        SkuAction.getList(1,'');
    }
  render() {
    return (
      <div className="left-nav">
        <div className="nav-box">
          <div className="nav-tab">
            <a href="JavaScript:;" className="fenlei"><i className="iconfont icon-shangpinfenlei" /></a>
            <a href="JavaScript:;" className="shuxing"><i className="iconfont icon-shuxingfenlei" /></a>
          </div>
          <div id="productNav" className="nav-list fenlei-box show">
                <ul>
                {
                    categoryData.map(category=>(
                        <li key={category.Id}>
                            <NavLink to={`/index/category/${category.Id}`}> 
                                <i className={`iconfont icon-class${category.Id}`}></i>
                                <b>{category.Name}</b>
                            </NavLink>
                        </li>
                    ))
                }
                </ul>
          </div>
          <div id="salesNav" className="nav-list shuxing-box">
          </div>
        </div>
      </div>
    );
  }
}