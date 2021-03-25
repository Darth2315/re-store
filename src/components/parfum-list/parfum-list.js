import React, {Component} from 'react';
import ParfumListItem from '../parfum-list-item';
import { connect } from 'react-redux';
import { withParfumstoreService } from '../hoc';
import { fetchParfums } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './parfum-list.css';

class ParfumList extends Component {

    componentDidMount() {
        this.props.fetchParfums();
    }
    
    render() {
        const { parfums, loading, error } = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator />
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
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const { parfumstoreService } = ownProps;

    return {
        fetchParfums: fetchParfums(parfumstoreService, dispatch)
    }
}

// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
// The above code with compose function
export default compose(
                withParfumstoreService(),
                connect(mapStateToProps, mapDispatchToProps)
                )(ParfumList);