import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import './dashboard.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import safety from '../../assets/safety.PNG';
import rightArrow from '../../assets/right-arrow.PNG';
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Dashboard = () => {

    const progressBars = [
        { name: 'Mon', percent: 60, tooltip: 2 },
        { name: 'Tue', percent: 70, tooltip: 3 },
        { name: 'Wed', percent: 60, tooltip: 4 },
        { name: 'Thur', percent: 60, tooltip: 6 },
        { name: 'Fri', percent: 90, tooltip: 8 },
        { name: 'Sat', percent: 0, tooltip: 4 },
        { name: 'Sun', percent: 40, tooltip: 9 },
    ];

    // Progress bar
    const CustomProgressBar = ({ name, percent, tooltip }) => (
        <div className="progress-container">
            <Progress.Line percent={percent} name="Progress 1" vertical={true} />
            <span className="progress-name">{name}</span>
            <span className='tooltip-progress'>{tooltip} alikes</span>
        </div>
    );


    // pie chart
    const state = {
        series: [25, 25, 10, 25],
        labels: ['LOOK ALIKES', 'TOTAL ENCROACHMENTS', 'PROVIDED REDIRECTION', 'RESOLVED THREATS'],
        colors:['#49e2f9','#fd9d81','#1f85ff','#efe215'],
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    background: 'none',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '12px',
                            color: undefined,
                            offsetY: 5,
                        },
                        value: {
                            show: false,
                            color: '#98aab4',
                        },
                    },
                },
            },
        },
        options: {
            chart: {
                type: 'donut',
            },
            stroke: {
                show: false,
            },
            labels: ['LOOK ALIKES', 'TOTAL ENCROACHMENTS', 'PROVIDED REDIRECTION', 'RESOLVED THREATS'],
            dataLabels: {
                enabled: false, // Set this to false to hide data labels
            },
            legend: {
                position: 'bottom',
            },
            responsive: [
                {
                    breakpoint: 1080,
                    options: {
                        chart: {
                            width: 400,
                            height: 400
                        },
                    },
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            width: 300,
                            height: 250
                        },
                    },
                },
            ],
        },
    };

    return (
        <>
            <Container>
                <section className='mt-200 dashboard-total'>
                    <Card>
                        <Card.Header className='card-header'>
                            <div className='d-flex justify-content-between main-header'>
                                <div className='d-flex side-header'>
                                    <h3 className='web-card-heading'>Web 2.0 Domains</h3>
                                    <div className='safe-span'>
                                        <img src={safety} />
                                        <span>100% safe</span>
                                    </div>
                                    <div className='d-flex flex-value'>
                                        <p>Show:</p>
                                        <select className='week-selection'>
                                            <option selected>This week </option>
                                            <option>This month </option>
                                            <option>This year </option>
                                        </select>
                                    </div>
                                </div>
                                <div className='d-flex right-sidebar'>
                                    <h5 className='web-card-heading'>Manage web 2.0 domains</h5>
                                    <img src={rightArrow} />
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className='row g-20'>
                                <div className='col-xl-3 col-lg-3  col-md-12 col-xs-12 col-sm-12'>
                                    <Card className='h-100'>
                                        <ReactApexChart colors={state.colors} plotOptions={state.plotOptions} options={state.options} series={state.series} labels={state.labels} type="donut" />
                                    </Card>
                                </div>
                                <div className='col-xl-9 col-lg-9  col-md-12 col-xs-12 col-sm-12'>
                                    <div className='row progressing-blocks g-20'>
                                        <div className='col-xl-6 col-lg-6  col-md-12 col-xs-12 col-sm-12'>
                                            <Card className="custom-card first-one">
                                                <Card.Title className='text-left prog-heading'>Look Alikes</Card.Title>
                                                <h2 className='text-left'>5</h2>
                                                <div className='d-flex justify-content-center first-column-progress'>
                                                    {progressBars.map((bar, index) => (
                                                        <CustomProgressBar key={index} name={bar.name} percent={bar.percent} tooltip={bar.tooltip} />
                                                    ))}
                                                </div>
                                            </Card>
                                        </div>

                                        <div className='col-xl-6 col-lg-6  col-md-12 col-xs-12 col-sm-12'>
                                            <Card className="custom-card second-one">
                                                <Card.Title className='text-left prog-heading'>Total Encroachments</Card.Title>
                                                <h2 className='text-left'>6</h2>
                                                <div className='d-flex justify-content-center first-column-progress'>
                                                    {progressBars.map((bar, index) => (
                                                        <CustomProgressBar key={index} name={bar.name} percent={bar.percent} tooltip={bar.tooltip} />
                                                    ))}
                                                </div>
                                            </Card>
                                        </div>

                                        <div className='col-xl-6 col-lg-6  col-md-12 col-xs-12 col-sm-12  total-card-webdomain  '>
                                            <Card className="custom-card third-one">
                                                <Card.Title className='text-left prog-heading'>Provided Redirections</Card.Title>
                                                <h2 className='text-left'>4</h2>
                                                <div className='d-flex justify-content-center first-column-progress'>
                                                    {progressBars.map((bar, index) => (
                                                        <CustomProgressBar key={index} name={bar.name} percent={bar.percent} tooltip={bar.tooltip} />
                                                    ))}
                                                </div>
                                            </Card>
                                        </div>

                                        <div className='col-xl-6 col-lg-6  col-md-12 col-xs-12 col-sm-12  total-card-webdomain  '>
                                            <Card className="custom-card fourth-one">
                                                <Card.Title className='text-left prog-heading'>Resolved Threats</Card.Title>
                                                <h2 className='text-left'>10</h2>
                                                <div className='d-flex justify-content-center first-column-progress'>
                                                    {progressBars.map((bar, index) => (
                                                        <CustomProgressBar key={index} name={bar.name} percent={bar.percent} tooltip={bar.tooltip} />
                                                    ))}
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </section>
            </Container>
        </>
    )
}

export default Dashboard