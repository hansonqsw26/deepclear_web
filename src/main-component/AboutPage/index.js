import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'
import Features2 from '../../components/features2'
import AboutSection2 from '../../components/about2'
import Mission from '../../components/Mission'
import TeamSection from '../../components/Team'
import Newsletter from '../../components/Newsletter'
import FooterSection from '../../components/Footer'


const Aboutpage = () => {
    return(
       <div>
           <Navbar/>
           {/*<Breadcumb bdtitle={'About Us'} bdsub={'About'}/>*/}
           {/*<Features2/>*/}
           <AboutSection2/>
           <Mission/>
           {/*<TeamSection/>*/}
           {/*<Newsletter nwclass={'wpo-newsletter-section'}/>*/}
           <FooterSection/>
       </div>
    )
}

export default Aboutpage;