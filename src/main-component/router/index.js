import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Aboutpage from '../AboutPage'
import ServiceSingle from '../ServiceSingle'
import AirFreight from '../AirFreight'
import RoadFreight from '../RoadFreight'
import OceanFreight from '../OceanFreight'
import PricingPage from '../PricingPage'
import TeamPage from '../TeamPage'
import ContactPage from '../ContactPage'
import BlogPageSidebar from '../BlogPageSidebar'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogSingleSidebar from '../BlogSingleSidebar'
import BlogDetailsFullwidth from '../BlogDetailsFullwidth'


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='home' element={<Homepage/>} />
          <Route path='home2' element={<Homepage2/>} />
          <Route path='home3' element={<Homepage3/>} />
          <Route path='about' element={<Aboutpage/>} />
          <Route path='servicesingle' element={<ServiceSingle/>} />
          <Route path='freight' element={<AirFreight/>} />
          <Route path='road' element={<RoadFreight/>} />
          <Route path='ocean' element={<OceanFreight/>} />
          <Route path='pricing' element={<PricingPage/>} />
          <Route path='team' element={<TeamPage/>} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='blog' element={<BlogPageSidebar/>} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth/>} />
          <Route path='blog-single' element={<BlogSingleSidebar/>} />
          <Route path='blog-single-fullwidth' element={<BlogDetailsFullwidth/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
