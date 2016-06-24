import AppDispatcher from '../dispatcher/AppDispatcher';
import SkuConstant from '../constants/SkuConstant';
import {EventEmitter} from 'events';
import {WebApi} from '../constants/WebApi';
import assign from 'object-assign';
const CHANGE_EVENT = 'SKULISTCHANGE';
let _data = [];
const skuAPI = {
    getAll(categoryId) {
        console.debug('---------------getsource api:'+WebApi.GETSKULIST)
        fetch(WebApi.GETSKULIST).then(response => response.json())
            .then(responseData => {
                console.log('responseData->');
                console.log(responseData);
                _data = responseData;
                SkuStore.emitChange();
            })
            .catch(e => console.log("Oops, error", e));
    }
};

const SkuStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
        
    },
    getAll: function() {
        return _data;
    },
    addChangeListener: function(callback) {
        console.debug('监听成功')
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});
AppDispatcher.register(function(action) {
    var text;
    switch (action.actionType) {
        case SkuConstant.SKU_GETLIST:
        console.debug('SKU_GETLIST AppDispatcher...')
             skuAPI.getAll(action.categoryId);
            break;
        case SkuConstant.SKU_GETDETAIL:

            break;
        default:
            //todo
    }
});
export default SkuStore;