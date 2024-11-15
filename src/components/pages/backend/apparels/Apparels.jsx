import React from 'react'
import Heading from '../partials/Heading';
import Footer from '../partials/Footer';
import Navigation from '../partials/Navigation';
import ApparelsTable from './ApparelsTable';

const Apparels = () => {
  return (
      <section className='flex  min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px] border-r border-line'>
          <Navigation menu="apparels "/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
            <Heading title="Apparels" subtitle= "Manage Order List"/>
            <ApparelsTable />
          <Footer />
        </main>
      </section>
  );
}

export default Apparels;
  