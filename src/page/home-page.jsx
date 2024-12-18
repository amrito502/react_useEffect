import React from 'react';
import Layout from '../layout/Layout';
import ProductList from '../components/ProductList';

function HomePage() {
  return (
    <Layout>
      <h1 className='mt-3 text-center'>Home Page</h1>
      <ProductList/>
    </Layout>
  );
}

export default HomePage;
