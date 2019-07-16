import React, { Component } from 'react';
import {RoomContext} from '../context';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        
        return (
            <div className="featured-rooms">
                <Title title="featured rooms" />
                <div class="featured-rooms-center">
                    {rooms}
                </div>
            </div>
        )
    }
}
