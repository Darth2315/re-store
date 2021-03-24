import React, {Component} from 'react';
import ParfumListItem from '../parfum-list-item';
import { connect } from 'react-redux';
import { withParfumstoreService } from '../hoc';
import { parfumsLoaded, parfumsRequested } from '../../actions';
import { bindActionCreators } from 'redux';
import { compose } from '../../utils';
import Spinner from '../spinner';

import './parfum-list.css';

class ParfumList extends Component {

    componentDidMount() {
        // get data from service
        const { parfumstoreService, parfumsLoaded, parfumsRequested } = this.props;
        parfumsRequested();
        parfumstoreService.getParfums()
        .then((data) => {
            // dispatch actions to store
            parfumsLoaded(data);
        })
    }
    
    render() {
        const { parfums, loading } = this.props;

        if (loading) {
            return <Spinner/>
        }
        return (
            <>
                <div className="num-items">Показано 10 з 56</div>
                <div className="item-list">
                    {
                        parfums.map(parfum => {
                            return (
                                <div key={parfum.id} className="item">
                                    <ParfumListItem parfum={parfum}/>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parfums: state.parfums,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({parfumsLoaded, parfumsRequested}, dispatch);
}

// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
// The above code with compose function
export default compose(
                withParfumstoreService(),
                connect(mapStateToProps, mapDispatchToProps)
                )(ParfumList);