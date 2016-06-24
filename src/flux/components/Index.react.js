import React,{Component,PropTypes } from 'react';
import Header from './Header.react';
import Category from './Category.react';
import CategoryMap from './CategoryMap.react';
import SkuList from './SkuList.react';
import SkuStore from '../stores/SkuStore';

// const skuListData=[
//     {"SkuId":10000033,"SkuName":"生粉(威思顿）","SpecValue":"25","SpecName":"公斤","BoxSpecValue":null,"BoxSpecName":"","MainImgPath":"http://123.57.211.74/Upload/ProductPic/240x240/201601/1516053943.jpg","IsSalesCategory":false},
//     {"SkuId":10000039,"SkuName":"生脱皮芝麻","SpecValue":"1","SpecName":"公斤","BoxSpecValue":null,"BoxSpecName":"","MainImgPath":"http://123.57.211.74/Upload/ProductPic/240x240/201601/0817430795.jpg","IsSalesCategory":false},
//     {"SkuId":10000078,"SkuName":"小花生(四粒红）","SpecValue":"25","SpecName":"公斤","BoxSpecValue":null,"BoxSpecName":"","MainImgPath":"http://123.57.211.74/Upload/ProductPic/240x240/201601/0817415072.jpg","IsSalesCategory":false}
// ];
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:props.data
        }
    }
    componentWillUnmount () {
        SkuStore.removeChangeListener(this._onChange.bind(this));
    }
    componentDidMount() {
        SkuStore.addChangeListener(this._onChange.bind(this));
    }
    render() {
        console.debug('开始渲染->index begin：');
        console.debug(this.state.data);
        console.debug(this.props.params);
        return (
            <div>
                <Header/>
                <Category/>
                <div className="main-box">
                    <CategoryMap/>
                    <SkuList skuListData={this.state.data}/>
                </div>
            </div>
        );
    }
    _onChange(){
        console.debug('触发成功')
        this.setState({
            data:SkuStore.getAll()
        })
    }
}
Index.propTypes = { data: PropTypes.array };
Index.defaultProps = { data: []};