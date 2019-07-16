import React, { Component } from 'react';
import items from './data';
import Client from './Contentful';


const RoomContext = React.createContext();
//Provider
//Consumer

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "hotel"
            });
            console.log(response.items);
            
            let rooms = this.getItems(response.items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms,
            loading: false
        })
        } catch (error) {
            console.log(error);
            
        }
    }
    componentDidMount() {
        this.getData()
    }
    getItems(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => 
                image.fields.file.url);
            let room = {...item.fields, id, images};
            return room
        });
        return tempItems;
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomConsumer, RoomProvider };