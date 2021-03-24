import React from 'react';
import { ParfumstoreServiceConsumer } from '../parfum-service-context';

const withParfumstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <ParfumstoreServiceConsumer>
        {
          (parfumstoreService) => {
            return (<Wrapped {...props}
                     parfumstoreService={parfumstoreService}/>);
          }
        }
      </ParfumstoreServiceConsumer>
    );
  }
};

export default withParfumstoreService;