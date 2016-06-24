import React from 'react';
import SkuAction from '../actions/SkuAction';
export default class SkuMapContainer extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
            skuName:''
        }
  }
  render() {
    return (
        <div id="skuMapContainer" className="list-bar">
          <a href="JavaScript:;" className="on">米面粮油</a> &gt;
          <a href="JavaScript:;">食用油</a>
          <div className="list-search">
            <input  type="text" defaultValue='' placeholder="请输入商品关键字" onChange={ (e) => this.setState({ skuName: e.target.value }) } className="search-text"size={30} />
            <a href="JavaScript:;" onClick={this._onChange.bind(this)}><i className="iconfont icon-sousuo" /></a>
          </div>
        </div>
    );
  } 
  _onChange(e){
        console.debug('触发成功')
        SkuAction.getList(1,this.state.skuName);
    }
}