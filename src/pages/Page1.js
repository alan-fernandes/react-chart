
import React from 'react';
import Navbar from '../components/navigation/Navbar';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';

import './Pages.css';

const Page1 = () => {
  return (
    <>
      <Navbar  active="page1" />
      <div className="Container">
        <div className="Title"> Page 1 </div>
        <div className="Graphics">
          <BarChart title="BARS CHART" url="https://private-afe609-testefront.apiary-mock.com/anual-result"></BarChart>

          <PieChart title="PIE CHART" url="https://private-afe609-testefront.apiary-mock.com/anual-percentage"></PieChart>
        </div>
      </div>
    </>
  );
}

export default Page1;


