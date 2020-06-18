import React from 'react';
import Navbar from '../components/navigation/Navbar';
import LineChart from '../components/charts/LineChart';

import './Pages.css';

const Page2 = () => {
  return (
    <>
      <Navbar active="page2" />
      <div className="Container">
        <div className="Title"> Page 2 </div>
        <div className="Grafics">
          <LineChart title="line chart 2 data" url="https://private-afe609-testefront.apiary-mock.com/time-data"></LineChart>
        </div>
      </div>
    </>
  );
}

export default Page2;
