import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import { FaGlobe } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import greenTick from '../../assets/green-tick.png';
import yellowGlobe from '../../assets/yellow-globe.png';
import pinkGlobe from '../../assets/pink-globe.png';
import plusicon from '../../assets/plusicon.png';
import rightArrow from '../../assets/right-arrow.PNG';
import Table from '../Table/table';
import ExpiringTable from '../Table/ExpiringTable';
import SubscriptionTable from '../Table/SubscriptionTable';
import './FirstTab.css';

const FirstTab = () => {

    // data
    const tableData = [
        { id: 1, domainName: 'shop.devevoqins.com',status:'Active', expiry: '25 Jun 2020',redirections:20,more:'Manage', newDomainName: 'newevoqins.xyz',autoRenewal:false },
        { id: 1, domainName: 'shop.devevoqins.in',status:'Active', expiry: '25 Jun 2020',redirections:2,more:'Manage', newDomainName: 'newevoqins.xyz' ,autoRenewal:true},
        { id: 1, domainName: 'shop.devevoqins.com',status:'Active', expiry: '25 Jun 2020',redirections:10,more:'Manage', newDomainName: 'newevoqins.xyz',autoRenewal:false }
        // Add more data as needed
      ];

      //headings of 3 tables
      const heading=['Domain Name','Status','Expiry','Redirections','More'];
      const expiringHeading=['Domain Name','Expiry on','Auto Renewal'];
      const subscriptionHeading=['Domain Name','Single Domain','Subscription','']
    return (
        <>
       
         <div className='first-section-domains'>
                <div className='domain-heading'>
                    <h3>Your Web 2.0 domains</h3>
                </div>
                <div className='link-btn-domain'>
                    <button type="button" className='domain-button'>
                        <FaGlobe /><span className='globe-icon'>Link Outside Domains</span>
                    </button>
                </div>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="p-100"
                >
                    <Tab eventKey="home" title="Active Domains(2)">
                        <div className='d-flex g-10 domains-cards'>
                            {/* 1st card */}
                          <div className='col-sm-12 col-xs-12 col-md-12 col-xl-4 col-lg-4'>
                           <Card className='card-main-domain'>
                            <div className='card-heading-domain'> 
                            <img src={yellowGlobe} alt='yellow-globe'/> <h3>devevoqins.com</h3>
                            </div>
                            <div className='card-inner-items'>
                            <div className='d-flex'>
                                <span>Status:</span>
                                <h6>Active</h6>
                                <img src={greenTick} alt='pink-globe'/>
                            </div>
                            <div className='d-flex'>
                                <span>Auto Renew:</span>
                                <h6>On</h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'> 
                                <span>Expires on:</span>
                                <h6>25 Apr 2022</h6>
                                </div>
                                <div><img src={rightArrow} alt="right-arrow"/></div>
                            </div>
                            </div>
                           </Card>
                          </div>

                          {/*  2nd card*/}
                          <div className='col-sm-12 col-xs-12 col-md-12 col-xl-4 col-lg-4'>
                           <Card className='card-main-domain'>
                            <div className='card-heading-domain'> 
                            <img src={pinkGlobe}/> <h3>devevoqins.com</h3>
                            </div>
                            <div className='card-inner-items'>
                            <div className='d-flex'>
                                <span>Status:</span>
                                <h6>Active</h6>
                                <img src={greenTick}/>
                            </div>
                            <div className='d-flex'>
                                <span>Auto Renew:</span>
                                <h6>On</h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'> 
                                <span>Expires on:</span>
                                <h6>25 Apr 2022</h6>
                                </div>
                                <div><img src={rightArrow} alt="right-arrow"/></div>
                            </div>
                            </div>
                           </Card>
                          </div>

                          {/* 3rd card */}
                          <div className='col-sm-12 col-xs-12 col-md-12 col-xl-4 col-lg-4'>
                           <Card className='card-main-domain new-domain'>
                          <img src={plusicon} alt='Plus-icon'/>
                          <h6>Add New Domain</h6>
                           </Card>
                          </div>
                        </div>
                    <div>
                      <div className='domain-heading'>
                         <h3>Secondary Domains</h3>
                      </div>
                    <Container>
                      <div className='table-container'>
                        <Table data={tableData} heading={heading}/>
                      </div>
                    </Container>
                    </div>
                    <div>
                        <Container>
                        <Card className='subscription-card table-container'>
                        <div className='expiring-heading'>
                            <h3>Domains Recommended For You</h3>
                        </div>
                        <SubscriptionTable data={tableData} heading={subscriptionHeading}/>
                        </Card>
                        </Container>
                    </div>
                    <div>
                        <Container>
                        <Card className='expiring-card'>
                        <div className='expiring-heading'>
                            <h3>Expiring Soon</h3>
                        </div>
                        <ExpiringTable data={tableData} heading={expiringHeading}/>
                        </Card>
                        </Container>
                    </div>
                    </Tab>
                    <Tab eventKey="profile" title="Expired Domains">
                        Test Content
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default FirstTab