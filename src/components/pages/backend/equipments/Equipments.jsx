import React from 'react'
import Heading from '../partials/Heading';
import Footer from '../partials/Footer';
import Navigation from '../partials/Navigation';
import EquipmentsTable from './EquipmentsTable';

const Equipments = () => {
  return (
      <section className='flex  min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px] border-r border-line'>
          <Navigation menu="gym"/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
            <Heading title="Equipments" subtitle= "Manage Order List"/>
            <EquipmentsTable />
          <Footer />
        </main>
      </section>
  );
}

export default Equipments;
