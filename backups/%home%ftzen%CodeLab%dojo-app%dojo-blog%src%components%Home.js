
import { useState, useEffect} from 'react';
import "./Home.css"
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: '1. My new website', body: 'Rand txt', author: 'dave', id: 1},
		{ title: '2. Welcome Party', body: 'Rand txt', author: 'kalev', id: 2},
		{ title: '3. Top tips', body: 'Rand txt', author: 'marika', id: 3},

]);

	useEffect( () => {
	console.log('useEffect ran')
		
	});
	

//  Data is stored in useState!

// In the map function "blog" is a random arguemnt is used to asign array values!

// blogs is a prop!
	return (
		<div className="home">

		<BlogList blogs= {blogs} title="A Blog"/>
		

	
		</div>   
			)

     
}
 
export default Home ;
