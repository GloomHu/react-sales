import React from 'react';
export default class SkuCell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const {MainImgPath,SkuName,SpecValue,SpecName,BoxSpecValue,BoxSpecName}=this.props.skuData;
    return (
      <li>
        <a href="#">
          <div className="goods-box">
            <div className="g-img">
              <img src={MainImgPath}/>
            </div>
            <div className="g-name">{SkuName}</div>
            <div className="g-note">规格：{SpecValue}/{SpecName}</div>
            {BoxSpecValue?<div className="g-note">箱规：{BoxSpecValue}/{BoxSpecName}</div>:<div></div>}
          </div>
        </a>
      </li>
    );
  }
}