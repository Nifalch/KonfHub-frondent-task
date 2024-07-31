import React, { useEffect } from 'react';
import './EventCard.scss';
import he from 'he';
import Countdown from './Countdown'
import TicketList from './TicketList';

const EventCard = ({ event }) => {
    const {
        name,
        event_website,
        description,
        event_poster_url,
        organiser_image_url,
        organiser_name,
        organiser_info,
        organizer_facebook_url,
        organizer_linkedin_url,
        organizer_twitter_url,
        organiser_website,
        organiser_email,
        organiser_dial_code,
        organiser_phone,
    } = event;
    const decodedDescription = he.decode(description);
    const decodedOrganiserInfo = he.decode(organiser_info);
    const phoneNumber = `${organiser_dial_code}${organiser_phone}`;
    useEffect(() => {
        const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
            target: '#content-navbar',
            offset: 0,
        });

        return () => {
            scrollSpy.dispose();
        };
    }, []);

    return (
        <section className="banner">
            <div className="container-custom pt-0 p-4">
                <div className="row">
                    <div className="col-lg-9 col-12">
                        <div className="image-wrapper p-10 border-round mb-4">
                            <img src={event_poster_url} alt="Banner Image" className="img-fluid border-round"></img>
                        </div>
                        <nav id="content-navbar" className="navabr content-navbar p-0 mb-3">
                            <ul className="nav justify-content-between">
                                <li className="nav-item">
                                 <a className="nav-link" href="#section1">About</a>
                                </li>
                                <li className="nav-item">
                                 <a className="nav-link" href="#section2">Tickets</a>
                                </li>
                                <li className="nav-item">
                                 <a className="nav-link" href="#section3">This is speakers section</a>
                                </li>
                                <li className="nav-item">
                                 <a className="nav-link" href="#section4">This is workshop section</a>
                                </li>
                                <li className="nav-item">
                                 <a className="nav-link" href="#section5">This is event sponsors</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="content-wrapper">
                             <div data-bs-spy="scroll" data-bs-target="#content-navbar" data-bs-smooth-scroll="true" class="scrollspy-list" tabindex="0">
                                <section id="section1" className="about-section pt-20">
                                 <h4 className='title text-uppercase mb-4 font-bold'>About Event</h4>
                                 <div className="event-description" dangerouslySetInnerHTML={{ __html: decodedDescription }} />
                                </section>
                                <section id="section2" className="ticket-section" >
                                    <br></br><br></br>
                                <h4 className='title text-uppercase mb-4 font-bold'>Tickets</h4>
                                <TicketList />



                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="h-100">
                            <div className="event-wrapper position-sticky py-2 mt-lg-0 mt-3">
                                <div className="event-card m-0 w-100">
                                    <h4 className="font-extra-bold">{name}</h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="class-type"><i class="bi bi-camera-video-fill mr-2"></i>Online</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="class-type"><i class="bi bi-ticket-fill mr-2"></i>Paid</p>
                                        </div>
                                    </div>
                                    <p className="font-semi-bold mb-1">Event Live Link:  <a href={event_website} target="_blank" rel="" className="font-regular">Open streaming website</a></p>
                                    <p class=""><span class="font-semi-bold">Date</span>: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</p>
                                    <p class=""><span class="font-semi-bold">EVENT STARTS IN</span></p>

                                    <h4 className="font-extra-bold"><Countdown targetDate="2034-07-31T06:00:00" /></h4>

                                </div>
                               
                                <div className='buy-btn mt-3'>
                                 <a href={event_website} target="_blank" rel="" className="font-regular text-center border-round-sm" role='button'>Buy Now</a>
                                </div>
                                <div className='site-btn mt-3'>
                                 <a href={event_website} target="_blank" rel="" className="font-medium text-center border-round-sm" role='button'>Official Website <i class="bi bi-box-arrow-up-right ml-2"></i></a>
                                </div>
                                <div className='host-details mt-4'>
                                    <h4 className="font-extra-bold">Hosted By</h4>
                                    <div className="event-card m-0 w-100">
                                        <div className='d-flex align-items-center'>
                                            <div className='image-wrapper rounded-circle mr-3'>
                                             <img src={organiser_image_url} alt="Banner Image" className="img-fluid"></img>
                                            </div>
                                            <h5 className="font-bold">{organiser_name}</h5>
                                        </div>
                                        <div className="host-description mt-3" dangerouslySetInnerHTML={{ __html: decodedOrganiserInfo }} />
                                        <div className='host-contact-wrapper mt-4'>
                                            <h6 className='contact-title text-capitalize'>Contact us on</h6>
                                            <ul className='social-list d-flex p-0 justify-content-lg-between mt-3'>
                                                <li className='list-item mx-lg-0 mx-2'>
                                                    <a href={organizer_facebook_url} target="_blank" rel=""><i class="bi bi-facebook"></i></a>
                                                </li>
                                                <li className='list-item mx-lg-0 mx-2'>
                                                <a href={organizer_twitter_url} target="_blank" rel=""><i class="bi bi-twitter-x"></i></a>
                                                </li>
                                                <li className='list-item mx-lg-0 mx-2'>
                                                    <a href={organizer_linkedin_url} target="_blank" rel=""><i class="bi bi-linkedin"></i></a>
                                                </li>
                                                <li className='list-item mx-lg-0 mx-2'>
                                                    <a href={organiser_website} target="_blank" rel=""><i class="bi bi-globe"></i></a>
                                                </li>
                                                <li className='list-item mx-lg-0 mx-2'>
                                                    <a href={organiser_email} target="_blank" rel=""><i class="bi bi-envelope-fill"></i></a>
                                                </li>
                                                <li className='list-item mx-lg-0 mx-2'>
                                                    <a href={`tel:${phoneNumber}`} target='_blank' rel=''><i class="bi bi-telephone-fill"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventCard;