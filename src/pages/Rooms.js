import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

export default class Rooms extends Component {
    static contextType = RoomContext;
    render() {
        let room = this.context;
        
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="Gallery">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <div className="featured-rooms">
                <div className="new-align">
                {
                    room.sortedRooms.map(item => {
                        return <img src={item.images[0]} className="gallery"/>
                        
                    })
                }
                </div>
            </div>
            </>
        )
    }
    
}

