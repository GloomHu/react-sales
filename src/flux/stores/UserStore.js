import AppDispatcher from '../dispatcher/AppDispatcher';
import UserConstant from '../constants/UserConstant';
import { EventEmitter } from 'events';
import { WebApi } from '../constants/WebApi';
import assign from 'object-assign';

const CHANGE_EVENT = 'USERCHANGE';
let _data = [];
const UserAPI = {
    login(userAccount, password) {
        console.debug('---------------getsource api:' + WebApi.LOGIN)
        fetch(WebApi.LOGIN
        // , {
        //         method: 'post',
        //         headers: {
        //             "Content-type": "application/json"
        //         },
        //         body: 'grant_type=password&username='+userAccount+'&password='+password
        //     }
            ).then(response => response.json())
            .then(responseData => {
                console.log('responseData->');
                console.log(responseData);
                _data = responseData;
                UserStore.emitChange();
            })
            .catch(e => console.log("Oops, error", e));
    }
};

const UserStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);

    },
    getReasult:function() {
        return _data;
    },
    addChangeListener: function(callback) {
        console.debug('监听成功')
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        console.debug('移除监听成功')
        this.removeListener(CHANGE_EVENT, callback);
    }
});
AppDispatcher.register(function(action) {
    console.debug('into AppDispatcher...')
    console.debug(action)
    var text;
    switch (action.actionType) {
        case UserConstant.User_LOGIN:
            console.debug('login AppDispatcher...')
            UserAPI.login(action.userAccount, action.password);
            break;
        case UserConstant.SKU_GETDETAIL:

            break;
        default:
            //todo
    }
});
export default UserStore;