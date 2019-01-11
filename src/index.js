import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter,Route,Switch,Link,Redirect } from 'react-router-dom'
import '../node_modules/antd-mobile/dist/antd-mobile.css'
import { createStore,applyMiddleware,compose } from 'redux'
import  thunk  from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'
import './config'

import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'
import AuthRouter from './container/autoRouter/authRouter'

const store = createStore(reducer,compose( 
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension() : f=>f
)) 

ReactDom.render(
    (
        <Provider store={store}>
            <BrowserRouter>
            <div>
                <AuthRouter></AuthRouter>
                <Switch>
                    <Route path='/geniusinfo' component={GeniusInfo}/>
                    <Route path='/bossinfo' component={BossInfo}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route component={Dashboard}/>
                </Switch> 
            </div>
            </BrowserRouter>               
        </Provider>
    )
    ,document.getElementById("root")
)





{/* <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/login' exact component={Login}/>
                    <Redirect to='/login' />
                </Switch>
        </BrowserRouter>  */}



// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
