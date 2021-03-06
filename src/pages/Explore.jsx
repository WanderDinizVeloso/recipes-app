import React from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import useRedirect from '../hooks/useRedirect';

function Explore() {
  const { shouldRedirect, redirect } = useRedirect();

  if (redirect.should) return <Redirect to={ redirect.path } />;
  return (
    <div>
      <HeaderWithoutSearch>Explorar</HeaderWithoutSearch>
      <Button
        variant="danger"
        data-testid="explore-food"
        onClick={ () => shouldRedirect('/explorar/comidas') }
      >
        Explorar Comidas
      </Button>
      <Button
        variant="primary"
        data-testid="explore-drinks"
        onClick={ () => shouldRedirect('/explorar/bebidas') }
      >
        Explorar Bebidas
      </Button>
      <Footer />
    </div>
  );
}

export default Explore;
