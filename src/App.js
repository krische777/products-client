import React from 'react';
import './App.css';
import store from './store'
import {Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import ItemsContainer from './components/ItemsContainer'
import ItemsDetails from './components/ItemsDetails'
import LoginFormContainer from './components/LoginFormContainer';
import SignupFormContainer from './components/SignupFormContainer';
import Home from './components/Home'

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="header">
                        <button><Link to="/">HOME</Link></button>
                        <button><Link to="/signup">SIGN UP</Link></button>
                        <button><Link to="/login">LOG IN</Link></button>

                    </header>
                    <main className='content'>
                        <Route exact path="/" component={Home}/>
                        <Route path="/signup" component={SignupFormContainer}/>
                        <Route path="/login" component={LoginFormContainer}/>
                        <Route exact path={`/product/:productId/items`} component={ItemsContainer}/>
                        <Route exact path={`/product/:productId/items/:itemsId`} component={ItemsDetails}/>
                    </main>
                </div>
            </Provider>
        );
    }
}

export default App;
