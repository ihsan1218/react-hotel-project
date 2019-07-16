import React, {Component} from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component  {
    state= {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Cocktails',
                info: 'We have a number of private room options for cocktail events. These are suitable for events catering from 20 guests to 150 guests.Your event can be as formal or casual as you like. We are able to organise all aspects of your function.'
            },
            {
                icon: <FaHiking />,
                title: 'Hiking',
                info: 'Hiking is generally the act of walking for extended periods of time for the enjoyment of a natural setting. Just one of the bunch of cool activities. Get yourself healthy. Keep in mind that there wil be locals to join and enjoy your long way! '
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Free shuttle to downtown every single day! You will have comfort of our luxurious vans and enjoy your trip during your holiday. Mostly even within half an hour you could a bus! We have also hired vehicles'
            },
            {
                icon: <FaBeer />,
                title: 'Parties',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum numquam ipsum amet eius modi illo quis saepe esse, dolore, tenetur at quia. Pariatur obcaecati quos quibusdam libero saepe voluptates.'
            }

        ]
    }
    render() {
        return (
            <div className="services">
                <Title title="services" />
                <div className="services-center">
                {
                    this.state.services.map(service => {
                        return (
                        <div className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
    
}
