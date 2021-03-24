import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { bindActionCreators } from 'redux';
import { compose } from '../../utils';
import Spinner from '../spinner';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        // get data from service
        const { bookstoreService, booksLoaded } = this.props;
        
        bookstoreService.getBooks()
        .then((data) => {
            // dispatch actions to store
            booksLoaded(data);
        })
    }
    
    render() {
        const { books, loading } = this.props;

        if (loading) {
            return <Spinner/>
        }
        return (
            <>
                <div className="num-items">Показано 10 з 56</div>
                <div className="item-list">
                    {
                        books.map(book => {
                            return (
                                <div key={book.id} className="item">
                                    <BookListItem book={book}/>
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
        books: state.books,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded}, dispatch);
}

// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
// The above code with compose function
export default compose(
                withBookstoreService(),
                connect(mapStateToProps, mapDispatchToProps)
                )(BookList);