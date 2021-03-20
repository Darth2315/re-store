import React from 'react';
import { BookstoreServiceConsumer } from 'react';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (BookstoreService) => {
                        <Wrapped {...props} BookstoreService={BookstoreService} />
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}

export default withBookstoreService;