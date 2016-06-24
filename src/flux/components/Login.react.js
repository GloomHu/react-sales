import React,{PropTypes} from 'react';
import Spinner from './Spinner.react';
import UserAction from '../actions/UserAction';
import UserStore from '../stores/UserStore';
import Cookie from 'tiny-cookie';
import { History } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
            submitted: false,
            userAccount: 'xuhaijin',
            password: 'qq1111'
        }
  }
//   componentWillMount(){
//     //    console.debug('app=>get user_access_token begin')
//         // console.debug(Cookie.get('user_access_token'))
//     //     console.debug('app=>get user_access_token end')
//         // var user_access_token=Cookie.get('user_access_token');
//         // if (user_access_token&&user_access_token!=='undefined') {
//         //     this.context.router.push("/index")
//         //     console.debug('app=>todo push')
//         //     return;
//         // }
//   }
   componentWillUnmount () {
        UserStore.removeChangeListener(this._onChange.bind(this));
    }
    componentDidMount() {
        UserStore.addChangeListener(this._onChange.bind(this));
    }
  _login(e){
       e.preventDefault();
       console.debug('login11...')
        const { userAccount, password } = this.state;
       this.setState({
            submitted: true
        });
          
        //测试账号
        if(userAccount!='xuhaijin'||password!='qq1111')
        {
             alert('账号或密码不正确');
              this.setState({submitted:false});
            return;
        }
       UserAction.login(userAccount,password);
  }
  render() {
       const { submitted, userAccount, password } = this.state;
        return (
            <div className="login-box">
                <div className="logo-box"><img src="images/logo.png"/></div>
                <div className="fonrm-box">
                    <ul>
                        <li className="text"><i className="iconfont icon-yonghu"></i><input type="text" placeholder="请输入用户名" value={userAccount} onChange={ (e) => this.setState({ userAccount: e.target.value.trim() }) }/></li>
                        <li className="text"><i className="iconfont icon-mima"></i><input type="text" type="password" placeholder="请输入密码" value={password} onChange={ (e) => this.setState({ password: e.target.value }) }/></li>
                        <li><a onClick={this._login.bind(this)} className="login-but"  disabled={ submitted } > { submitted ? <Spinner /> : '登 录' }</a> </li>
                    </ul>
                </div>
            </div>
        );
  }
    _onChange(){
        console.debug('触发成功1')
        this.setState({
                    submitted:false
                });
        var reasult=UserStore.getReasult();
        if(reasult&&reasult.access_token){
                Cookie.set('user_access_token', reasult.access_token, { expires:reasult.expires_in });
                 this.context.router.push("/index");
                // this.props.history.pushState(null,'/index');
        }
        else{
            alert(reasult.error);
        }
    }
}

// Login.propTypes={params: PropTypes.object}
// Login.mixins=[History];
Login.contextTypes={router: PropTypes.object}