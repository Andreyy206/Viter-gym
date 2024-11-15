import React from 'react'
import Heading from '../partials/Heading';
import Footer from '../partials/Footer';
import Navigation from '../partials/Navigation';
import AccesoriesTable from './AccesoriesTable';

const Accesories = () => {
  return (
      <section className='flex  min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px] border-r border-line'>
          <Navigation menu="accesories"/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
            <Heading title="Accesories" subtitle= "Manage Order List"/>
            <AccesoriesTable />
          <Footer />
        </main>
      </section>
  );
}

export default Accesories;
  