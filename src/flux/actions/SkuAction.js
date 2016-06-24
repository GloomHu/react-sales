import AppDispatcher from '../dispatcher/AppDispatcher';
import SkuConstant from '../constants/SkuConstant';
const SkuAction = {
    getList(categoryId,skuName) {
        AppDispatcher.dispatch({
            actionType: SkuConstant.SKU_GETLIST,
            categoryId: categoryId,
            skuName:skuName
        });
    },
    getDetail(skuId) {
        AppDispatcher.dispatch({
            actionType: SkuConstant.SKU_GETDETAIL,
            skuId: skuId
        });
    }
}
export default SkuAction;