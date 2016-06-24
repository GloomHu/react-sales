import React from 'react';
import Login from './Login.react';
import Cookie from 'tiny-cookie';
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        //    console.debug('app=>get user_access_token begin')
        console.debug(Cookie.get('user_access_token'))
        //     console.debug('app=>get user_access_token end')
        var user_access_token = Cookie.get('user_access_token');
        if (!user_access_token || user_access_token === 'undefined') {
            this.context.router.push("/login")
            console.debug('app=>todo login')
            return;
        }
    }
    render() {

        return ( < div> {
                this.props.children || < Login/>
            } </div>);
        }
}
App.contextTypes={router: React.PropTypes.object}