import React from 'react';
import SkuCell from './SkuCell.react';
export default class SkuListContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSkuList(skuListData){
    
    return skuListData.map((items, i)=>{
      return (<SkuCell skuData={items} key={items.SkuId}/>)
    });
  }
  render() {
    const {skuListData} =this.props;
    return (
        <div id="skulistContainer" className="list-box">
          <ul className="clearfix">
            {
              this.renderSkuList(skuListData)
            }
          </ul>
      </div>
    );
  }
}
SkuListContainer.defaultProps ={skuListData:[]}