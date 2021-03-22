import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import Header from '../header';
import Menu from '../menu';
import InfoBlock from '../info-block';
import PreFooter from '../pre-footer';
import Footer from '../footer';
import Copyright from '../copyright';
import Subscribe from '../subscribe';
import './app.css';

const App = () => {
    
    return (
        <>
            <Header/>
            <Menu/>
            <InfoBlock/>
            <div className="container">
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/cart' component={CartPage} />
                </Switch>
            </div>
            <PreFooter />
            <Subscribe/>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default App;