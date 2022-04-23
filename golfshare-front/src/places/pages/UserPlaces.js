import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';


const DUMMY_PLACES = [
	{
		id: 'g1',
		title: 'Pebble Beach',
		description:
			"One of the most famous golf courses in the world on California's west coast",
		imageUrl:
			'https://www.pebblebeach.com/content/uploads/20160811-cam-timeout.jpg',
		address: '1700 17 Mile Dr, Pebble Beach, CA, 93953',
		location: {
			lat: 36.5687066,
			lng: -121.9533659,
		},
		creator: 'u1',
	},

	{
		id: 'g2',
		title: 'Pebble Beach',
		description:
			"One of the most famous golf courses in the world on California's west coast",
		imageUrl:
			'https://www.pebblebeach.com/content/uploads/20160811-cam-timeout.jpg',
		address: '1700 17 Mile Dr, Pebble Beach, CA, 93953',
		location: {
			lat: 36.5687066,
			lng: -121.9533659,
		},
		creator: 'u2',
	},
];


const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  
  return (
    <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces;