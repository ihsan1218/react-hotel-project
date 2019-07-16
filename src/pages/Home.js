import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default class Home extends Component {
    render() {
        return (
            <>
            <Hero hero="defaultHero">
                <Banner title="Our Rooms" subtitle="starting from $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            </>
        )
    }
}



