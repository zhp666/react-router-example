import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
}from 'react-router-dom'

import {SubHeader} from '@/component/index.js'


// Login
const Login = (({match,location,history}) => {
    return(
        <div>
            Login
        </div>
    )
})

// Logout
const Logout = (({match,location,history}) => {
    return(
        <div>
            Logout
        </div>
    )
})

// Home
const Home = () => {
    return(
        <div>
            进入首页
        </div>
    )
}

// HomeRoute
const HomeRoute = ({component:Component,...rest}) => {
    return (
        <Route
            {...rest}
            render={() => (
                <Redirect to={{
                    pathname:'/home'
                }}/>
            )}
        />
    )
}


class RouterRedirect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Router>
                <div>
                    <SubHeader title='路由重定向'/>
                    <div className='container-rotuer'>
                        <div className='container'>
                            <ul>
                                <li><Link to="/login" replace>登陆</Link></li>
                                <li><Link to="/logout" replace>登出</Link></li>
                            </ul>

                            <HomeRoute path='/login' component={Login}/>
                            <Route path="/logout" component={Logout} />
                            <Route path="/home" component={Home} />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default RouterRedirect;