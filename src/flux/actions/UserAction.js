import AppDispatcher from '../dispatcher/AppDispatcher';
import UserConstant from '../constants/UserConstant';
const UserAction = {
    login(userAccount,password) {
               console.debug('login action...')
        AppDispatcher.dispatch({
            actionType: UserConstant.User_LOGIN,
            userAccount: userAccount,
            password:password
        });
    }
}
export default UserAction;