import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledMillerHome = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

header {
	position:fixed;
	top:0;
	width: 100%;
	height: 62px;
	font-family: Circular,Helvetica,Arial,sans-serif;
	color: #484848;
	background-color: #fff;
	border: 1px solid #DCE0E0;
	border-top: none;
	border-right: none;
	border-left: none;
}



/*---airbnb-logo---*/

	.logo {
		width: 138px;
		height: 61px;
		padding: 15px 20px;
		float: left;
		border: 1px solid #DCE0E0;
		border-top: none;
		border-bottom-color: transparent;
	}
		.logo:hover{
			background-color: #F5F5F5;
			cursor: pointer;
		}
		.logo svg {
			width: 100px;
			height: 31px;
		}



/*---search-bar---*/

	.search-bar {
		width: 817px;
		height: 61px;
		border: 1px solid #DCE0E0;
		padding: 19px 18px;
		float: left;
		border-right-color: transparent;
		border-bottom-color: transparent;
		border-top: none;
	}
		.search-icon {
			width: 26px;
			height: 26px;
			margin-right: 4px;
			float: left;
			fill: currentColor;
			color: #D3D5D3;
		}
		.search-form input{
			width: 730px;
			height: 18px;
			line-height: 18px;
			font-size: 15px;
			padding: 2px;
			margin-top: 3px;
			border: transparent;
		}
		.search-form input:focus {
			outline: none;
		}



/*---main-nav---*/

	.main-nav{
		float:right;
	}
	.main-nav li{
		float: left;
		list-style: none;
		padding: 22px 18px;
		border: 1px solid #DCE0E0;
		height: 61px;
		font-size: 14px;
		border-left-color: transparent;
		border-bottom-color: transparent;
		border-top: none;
	}
		.main-nav li:last-child{
		border-right-color: transparent;	
		}
		.main-nav li:hover{
			background-color: #F5F5F5;
			cursor: pointer;
		}
	.main-nav li button{
		margin-top: -10px;
		width: 120px;
		height: 30px;
		background: none;
		border: 2px solid #C4C4C4;
		border-radius: 5px;
		background-color: tranparent;
	}
		.main-nav li button:hover{
			border-color: #AAAAAA;
			cursor: pointer;
		}
		.main-nav li button:focus {
			outline: none;
		}



/*----------------
---Main Content---
----------------*/

.site-content{
	margin: 130px auto;
	width: 940px;
	height: 1500px;
	font-family: Circular,Helvetica,Arial,sans-serif;
	
}

/*---title---*/

	.title{
		font-size: 46px;
		font-weight: 100;
		color: #484848;
		margin-bottom: 60px;
	}
	.title span{
		font-weight: 800;
		color: #FF5A5F;
	}

/*---search-row---*/

	.search-input{
		padding: 10px;
		float: left;
		width: 330px;
		height: 42px;
		border: 1px solid #757575;
		border-right-color: transparent;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		font-size: 16px;
	}
	.checks-input{
		float: left;
		width: 330px;
		height: 42px;
		border: 1px solid #757575;
		border-right-color: transparent;
	}
		.check-in {
			padding: 2px;
			margin: 5px;
			float: left;
			width: 100px;
			height: 30px;
			border-color: transparent;
		  font-size: 16px;
		}
		.check-in:focus{
			outline: none;
			background-color: #99EDE6;
			border-radius: 4px;
		}
		.check-in:hover{
			cursor: pointer;
		}
		.check-out{
			padding: 2px;
			float: right;
			margin-top: 5px;
			margin-right: 70px;
			width: 110px;
			height: 30px;
			border-color: transparent;
		  font-size: 16px;
		}
		.check-out:focus{
			outline: none;
			background-color: #99EDE6;
			border-radius: 4px;
		}
		.check-out:hover{
			cursor: pointer;
		}
		.right-arrow{
			fill: currentColor;
			color: #757575;
			margin-top: 7px;
		}
	.guests{
		float: left;
		width: 130px;
		height: 42px;
		border: 1px solid #757575;
		border-right-color: transparent;
		background-color: #fff;
		font-size: 16px;
		padding: 10px;
	}
	.search-btn{
		float: left;
		width: 150px;
		height: 42px;
		border: 1px solid #FF5A5F;
		margin: 0 0 3px 0;
		background-color: #FF5A5F;
		color: #fff;
		font-weight: bold;
		font-size: 14px;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}
	.search-btn:hover{
		background-color: #FF7E82;
		cursor: pointer;
	}

/*---gallery-prices---*/

.prices{
	width: 953px;
	height: 330px;
	margin-top: 170px;
}
	.prices h3{
		font-weight: 100;
		font-size: 25px;
		color: #484848;
		margin-left: 5px;
	}
	.img{
		display: inline-block;
		margin: 30px 5px 0 5px;
	}
	.img:last-child { 
		margin-right: 0; 
	}
	.img img{
		width: 301px;
		height: 206px;
	}
	.price-stamp{
		margin: -200px 0 0 12px;
		color: #fff;
		font-weight: 900;
		font-size: 22px;
		text-shadow: 0 0 6px #615e61;
	}
	.description{
		margin: 180px 0 0 0;
		font-size: 14px;
		color: #484848;
	}

/*---line---*/

hr{
    border: 0;
    height: 1px;
    background: #DCE0E0;
		margin-bottom: 55px;
}

/*---gallery-places---*/
	
	.gallery-places h3{
		font-weight: 100;
		font-size: 25px;
		color: #484848;
		margin: 0 0 35px 5px;
	}
	.places{
		height: 680px;
		list-style-type: none;
    padding: 0;
    margin: 0;
		display: block;
	}
	.img-large{
		width: 460px;
		height: 310px;
		float: left;
		margin: 0 5px 10px 5px;
	}
	.img-large img{
		width: 460px;
		height: 310px;
		display: block;
	}
	.img-short{
		width: 225px;
		height: 150px;
		float: left;
		margin: 0 5px 10px 5px;
	}
	.img-short:last-child{
		margin-top: -160px;
	}
	.img-short img{
		width: 225px;
		height: 150px;
		display: block;
	}
	.place-names{
		margin: -30px 0 0 20px;
		color: #fff;
		font-size: 18px;
	}




/*---gallery-guidebooks---*/

.guidebooks{
	display: block;
}

.guidebooks h3{
	font-weight: 100;
	font-size: 25px;
	color: #484848;
	margin-left: 5px;	
}
.img-box{
	float: left;
	width: 305px;
	height: 205px;
	margin: 40px 5px 0 5px;
}
.img-box:last-child{
	margin-right: 0;
}
.img-box h4{
	font-size: 14px;
	color: #484848;
	float: left;
	margin: 5px 5px 0 0;
}
.img-box h4 spam{
	margin-left: -1px;
}
.img-box p{
	font-size: 14px;
	color: #484848;
	margin-top: 5px;
	float: left;
}
.img-big {
	float: left;
	margin-top: 3px;
	width: 200px;
  height: 163px;
}
.img-small {
	float: right;
	width: 100px;
	height: 80px;
	margin-top: 3px;
}



/*----------------
---Footer---
----------------*/

footer{
	font-family: Circular,Helvetica,Arial,sans-serif;
	margin-top: 300px;
	width: 100%;
	height: 470px;
	background-image: url("https://a0.muscache.com/airbnb/static/footer/background-317dd7c2cb678ddbdb0a983d511cb9a0.png");
	background-color: #2b2d2e;
}
.footer-content{
	width: 940px;
	margin: 0 auto;
	padding-top: 50px;
}
.footer-content hr{
	background: #555758;
	margin-bottom: 27px;
}
.footer-row{
	width: 100%;
	height: 205px;
	padding-left: 100px;
	margin-bottom: 50px;
}
/*---selectors---*/

.selectors{
	float: left;
	width: 250px;
	height: 95px;
	margin-right: 80px;
}
	.selectors select{
		width: 100%;
		height: 40px;
		font-size: 16px;
		padding: 10px;
		background-color: #484848;
		border: none;
		border-radius: 3px;
		color: #fff;
	}
	.language-selector{
		margin-bottom: 15px;
	}



/*---lists---*/
.lists{
	float: left;
}

.lists ul{
	color: #fff;
	list-style: none;
	float: left;
	width: 160px;
	height: 175px;
}
.lists ul h3{
	margin-bottom: 22px;
	font-size: 16px;
}
.lists ul li{
	margin-bottom: 5px;
	font-size: 14px;
}

.socialnetworks{
	width: 100%;
	height: 82px;
	margin-bottom: 15px;
}
.socialnetworks h2{
	text-align: center;
	color: #fff;
	font-size: 16px;
	margin-bottom: 25px;
}
.icons{
	width: 343px;
	height: 37px;
  margin: 0 auto;
}
.icons div{
	display: inline-block;
	float: left;
	width: 35px;
	height: 35px;
	border: 1px solid #fff;
	border-radius: 100%;
	padding: 7px;
	margin-right: 16px;
}
.icons div:last-child{
	margin-right: 0;
}
.icons div svg{
	color: red;
	width: 18px;
	height: 18px;
	color: #fff;
}

.copyright{
	text-align: center;
	color: #767676;
	font-size: 14px;
}
`;
const MillerHome = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch('https://millerfloridarealestate.com/wp-json/wp/v2/properties')
    .then(res=>res.json())
    .then(data=>{
      console.log('I am fetched data', data);
      setProperties(data)})
    .catch(err=>console.log(err.message))
  }, [])
  
  return (
    <StyledMillerHome>
      <header>
	
	<h1 className="logo">
		<svg xmlns="http://www.w3.org/2000/svg" 			xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 320.1 99.9" enable-background="new 0 0 320.1 99.9" xmlSpace="preserve">
<path fill="#FF5A5F" d="M168.7,25.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.5s2.8-6.5,6.5-6.5C165.9,18.7,168.7,21.6,168.7,25.1z   M141.9,38.2c0,0.6,0,1.6,0,1.6s-3.1-4-9.7-4c-10.9,0-19.4,8.3-19.4,19.8c0,11.4,8.4,19.8,19.4,19.8c6.7,0,9.7-4.1,9.7-4.1v1.7  c0,0.8,0.6,1.4,1.4,1.4h8.1V36.8c0,0-7.4,0-8.1,0C142.5,36.8,141.9,37.5,141.9,38.2z M141.9,62.3c-1.5,2.2-4.5,4.1-8.1,4.1  c-6.4,0-11.3-4-11.3-10.8s4.9-10.8,11.3-10.8c3.5,0,6.7,2,8.1,4.1V62.3z M157.4,36.8h9.6v37.6h-9.6V36.8z M300.8,35.8  c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8  C320.1,44.2,311.6,35.8,300.8,35.8z M299.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8  S305.6,66.3,299.2,66.3z M276.5,52.1v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7c-2.9,0-5.9,1.5-7.8,3.7v26.2h-9.6V36.8h7.6  c0.8,0,1.4,0.7,1.4,1.4v1.6c2.8-2.9,6.5-4,10.2-4c4.2,0,7.7,1.2,10.5,3.6C275.2,42.2,276.5,45.8,276.5,52.1z M218.8,35.8  c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8  C238.2,44.2,229.7,35.8,218.8,35.8z M217.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8  S223.6,66.3,217.2,66.3z M191.2,35.8c2.9,0,4.4,0.5,4.4,0.5v8.9c0,0-8-2.7-13,3v26.3h-9.6V36.8c0,0,7.4,0,8.1,0  c0.8,0,1.4,0.7,1.4,1.4v1.6C184.3,37.7,188.2,35.8,191.2,35.8z M91.5,71c-0.5-1.2-1-2.5-1.5-3.6c-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1  c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7c-1-1.8-2-3.7-3.6-5.5C56,2.2,51.4,0,46.5,0c-5,0-9.5,2.2-12.8,6  c-1.5,1.8-2.6,3.7-3.6,5.5c-0.8,1.6-1.6,3.2-2.4,4.7l-0.3,0.6C19.7,31.8,12.2,47,5.3,62l-0.1,0.2c-0.7,1.6-1.5,3.3-2.3,5.1  c-0.5,1.1-1,2.3-1.5,3.6c-1.3,3.7-1.7,7.2-1.2,10.8c1.1,7.5,6.1,13.8,13,16.6c2.6,1.1,5.3,1.6,8.1,1.6c0.8,0,1.8-0.1,2.6-0.2  c3.3-0.4,6.7-1.5,10-3.4c4.1-2.3,8-5.6,12.4-10.4c4.4,4.8,8.4,8.1,12.4,10.4c3.3,1.9,6.7,3,10,3.4c0.8,0.1,1.8,0.2,2.6,0.2  c2.8,0,5.6-0.5,8.1-1.6c7-2.8,11.9-9.2,13-16.6C93.2,78.2,92.8,74.7,91.5,71z M46.4,76.2c-5.4-6.8-8.9-13.2-10.1-18.6  c-0.5-2.3-0.6-4.3-0.3-6.1c0.2-1.6,0.8-3,1.6-4.2c1.9-2.7,5.1-4.4,8.8-4.4c3.7,0,7,1.6,8.8,4.4c0.8,1.2,1.4,2.6,1.6,4.2  c0.3,1.8,0.2,3.9-0.3,6.1C55.3,62.9,51.8,69.3,46.4,76.2z M86.3,80.9c-0.7,5.2-4.2,9.7-9.1,11.7c-2.4,1-5,1.3-7.6,1  c-2.5-0.3-5-1.1-7.6-2.6c-3.6-2-7.2-5.1-11.4-9.7c6.6-8.1,10.6-15.5,12.1-22.1c0.7-3.1,0.8-5.9,0.5-8.5c-0.4-2.5-1.3-4.8-2.7-6.8  c-3.1-4.5-8.3-7.1-14.1-7.1s-11,2.7-14.1,7.1c-1.4,2-2.3,4.3-2.7,6.8c-0.4,2.6-0.3,5.5,0.5,8.5c1.5,6.6,5.6,14.1,12.1,22.2  c-4.1,4.6-7.8,7.7-11.4,9.7c-2.6,1.5-5.1,2.3-7.6,2.6c-2.7,0.3-5.3-0.1-7.6-1c-4.9-2-8.4-6.5-9.1-11.7c-0.3-2.5-0.1-5,0.9-7.8  c0.3-1,0.8-2,1.3-3.2c0.7-1.6,1.5-3.3,2.3-5l0.1-0.2c6.9-14.9,14.3-30.1,22-44.9l0.3-0.6c0.8-1.5,1.6-3.1,2.4-4.6  c0.8-1.6,1.7-3.1,2.8-4.4c2.1-2.4,4.9-3.7,8-3.7c3.1,0,5.9,1.3,8,3.7c1.1,1.3,2,2.8,2.8,4.4c0.8,1.5,1.6,3.1,2.4,4.6l0.3,0.6  C67.7,34.8,75.1,50,82,64.9L82,65c0.8,1.6,1.5,3.4,2.3,5c0.5,1.2,1,2.2,1.3,3.2C86.4,75.8,86.7,78.3,86.3,80.9z"/>
		</svg>
	</h1>
	
	<section className="search-bar">
		
		<svg className="search-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
		</svg>
		
		<form className="search-form">
			<input type="text" placeholder="Where to?"/>
		</form>
		
	</section>
		
	
	<ul className="main-nav">
		<li> <button>Become a Host</button> </li>
		<li className="help">Help</li>
		<li>Sign Up</li>
		<li>Log In</li>
	</ul>
	
</header>




<main className="site-content">
	
	<h2 className="title"><span>Live there.</span> Book unique homes <br/>and experience a city like a local.</h2>
	
	
	<section className="search-row">
		
		<input className="search-input" type="text" placeholder="Where to?"/>
	
	
		<div className="checks-input">
			
			<input className="check-in" type="text" 			placeholder="Check In"></input>
	
			<svg className="right-arrow" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
   			<path d="M0 0h24v24H0z" fill="none"/>
    		<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
			</svg>
	
			<input className="check-out" type="text" placeholder="Check Out"></input>

		</div>


		<select className="guests">
			<option>1 Guest</option>
			<option>2 Guests</option>
			<option>3 Guests</option>
			<option>4 Guests</option>
			<option>5 Guests</option>
			<option>6 Guests</option>
			<option>7 Guests</option>
			<option>8 Guests</option>
			<option>9 Guests</option>
			<option>10 Guests</option>
			<option>11 Guests</option>
			<option>12 Guests</option>
			<option>13 Guests</option>
			<option>14 Guests</option>
			<option>15 Guests</option>
			<option>16+ Guests</option>
		</select>

		<button className="search-btn"> Search </button>

	</section>




	<section className="gallery">
		
		<div className="prices">
			
			<h3>Explore Airbnb picks</h3>
			
			{properties.map((property, index)=>(<div className="img">
        <img src={`${property.acf.propertyimage.url}`}/>
				<div className="price-stamp">${property.acf.price}</div>
				<div className="description">
					<h4>{property.acf.title}</h4>
				</div>
			</div>))}
			
			{/* <div className="img"><img src="https://a2.muscache.com/im/pictures/34792065/bae84a3f_original.jpg?aki_policy=x_medium"/>
				<div className="price-stamp">R$ 1399</div>
				<div className="description">
					<h4>Everview Suite</h4>
				</div>
			</div> */}
			
			{/* <div className="img"><img src="https://a2.muscache.com/im/pictures/1faf9a4c-f839-44da-bd37-65ddc928379e.jpg?aki_policy=x_medium"/>
				<div className="price-stamp">R$ 576</div>
				<div className="description">
					<h4>180° View, private pool villa</h4>
				</div>
			</div> */}
	
		</div>
		
		<hr/>
		
		
	<div className="gallery-places">
		
		<h3>Explore the world</h3>
		
		<ul className="places">
			
			<li className="img-large">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Paris_480x320.jpg"/>
				<h4 className="place-names">Paris</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Rome_Piazza017_480x320.jpg"/>
				<h4 className="place-names">Rome</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Los_Angeles_480x320.jpg"/>
				<h4 className="place-names">Los Angeles</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Lisbon_480x320.jpg"/>
				<h4 className="place-names">Lisbon</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Kyoto_480x320.jpg"/>
				<h4 className="place-names">Tokyo</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-London_480x320.jpg"/>
				<h4 className="place-names">London</h4>
			</li>
			
			
			<li className="img-large">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-New_York_480x320.jpg"/>
				<h4 className="place-names">New York</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Barcelona_480x320.jpg"/>
				<h4 className="place-names">Barcelona</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Amsterdam_480x320.jpg"/>
				<h4 className="place-names">Amsterdam</h4>
			</li>
			
			
			<li className="img-short">
				<img src="https://a0.muscache.com/airbnb/static/destinations/o-Berlin_480x320.jpg"/>
				<h4 className="place-names">Berlin</h4>
			</li>
			
		</ul>
		
	</div>
		
	<hr/>
		
		
		<div className="guidebooks">
			
			<h3>Meet Guidebooks</h3>
			
			<div className="img-box">
				<img className="img-big" src="https://a2.muscache.com/ac/pictures/2a4e63c3-c981-4cbc-9c37-80a6ab3a9d24.jpg?interpolation=lanczos-none&size=x_medium&output-format=jpg&output-quality=70"/>
				<img className="img-small" src="https://a0.muscache.com/airbnb/guidebook/v1_san_francisco_food_scene_carousel@2x.jpg"/>
				<img className="img-small" src="https://a1.muscache.com/airbnb/guidebook/v1_san_francisco_drinks_nightlife_carousel@2x.jpg"/>
				
				<h4><span>San Francisco</span></h4>
				<p>6,237 places</p>
			</div>
			
			
			<div className="img-box">
				<img className="img-big" src="https://a2.muscache.com/ac/pictures/cf3b9363-34e4-4532-b051-6a7663410854.jpg?interpolation=lanczos-none&size=x_medium&output-format=jpg&output-quality=70"/>
				<img className="img-small" src="https://a1.muscache.com/airbnb/guidebook/v1_new_york_food_scene_carousel@2x.jpg"/>
				<img className="img-small" src="https://a0.muscache.com/airbnb/guidebook/v1_new_york_drinks_nightlife_carousel@2x.jpg"/>
				
				<h4>New York</h4>
				<p>23,725</p>
			</div>
			
			
			<div className="img-box">
				<img className="img-big" src="https://a2.muscache.com/ac/pictures/b62aa572-cf0b-4e4a-b886-a039a0250cf3.jpg?interpolation=lanczos-none&size=x_medium&output-format=jpg&output-quality=70"/>
				<img className="img-small" src="https://a1.muscache.com/airbnb/guidebook/v1_london_food_scene_carousel@2x.jpg"/>
				<img className="img-small" src="https://a2.muscache.com/airbnb/guidebook/v1_london_drinks_nightlife_carousel@2x.jpg"/>
				
				<h4> London</h4>
				<p>18,795 places</p>
			</div>
			
			
		</div>
		
	</section>
	
</main>

<footer>
	
	
	
	<div className="footer-content">
		<div className="footer-row">
			<section className="selectors">
				<select className="language-selector">
					<option>Bahasa Indonesia</option>
					<option>Bahasa Melayu</option>
					<option>Català</option>
					<option>Dansk</option>
					<option>Deutsch</option>
					<option>English</option>
					<option>Español</option>
					<option>Eλληνικά</option>
					<option>Français</option>
					<option>Italiano</option>
					<option>Magyar</option>
					<option>Nederlands</option>
					<option>Norsk</option>
					<option>Polski</option>
					<option>Português</option>
					<option>Suomi</option>
					<option>Svenska</option>
					<option>Türkçe</option>
					<option>Íslenska</option>
					<option>Čeština</option>
					<option>Русский</option>
					<option>ภาษาไทย</option>
					<option>中文 (简体)</option>
					<option>中文 (繁體)</option>
					<option>日本語</option>
					<option>한국어</option>
				</select>

				<select className="currency-selector">
					<option>AED</option>
					<option>ARS</option>
					<option>AUD</option>
					<option>BGN</option>
					<option>BRL</option>
					<option>CAD</option>
					<option>CHF</option>
					<option>CLP</option>
					<option>CNY</option>
					<option>COP</option>
					<option>CRC</option>
					<option>CZK</option>
					<option>DKK</option>
					<option>EUR</option>
					<option>GBP</option>
					<option>HKD</option>
					<option>HRK</option>
					<option>HUF</option>
					<option>IDR</option>
					<option>ILS</option>
					<option>INR</option>
					<option>JPY</option>
					<option>KRW</option>
					<option>MAD</option>
					<option>MXN</option>
					<option>MYR</option>
					<option>NOK</option>
					<option>NZD</option>
					<option>PEN</option>
					<option>PHP</option>
					<option>PLN</option>
					<option>RON</option>
					<option>RUB</option>
					<option>SAR</option>
					<option>SEK</option>
					<option>SGD</option>
					<option>THB</option>
					<option>TRY</option>
					<option>TWD</option>
					<option>UAH</option>
					<option>USD</option>
					<option>UYU</option>
					<option>VND</option>
					<option>ZAR</option>
				</select>
			</section>

			<section className="lists">
				<ul>
					<h3>Company</h3>

					<li>About</li>
					<li>Careers</li>
					<li>Press</li>
					<li>Blog</li>
					<li>Help</li>
					<li>Policies</li>
					<li>Disaster Response</li>
					<li>Terms & Privacy</li>
				</ul>

				<ul>
					<h3>Discover</h3>

					<li>Trust & Safety</li>
					<li>Travel Credit</li>
					<li>Gift Cards</li>
					<li>Airbnb Picks</li>
					<li>Mobile</li>
					<li>Airbnb Action</li>
					<li>Business Travel</li>
					<li>Site Map</li>
				</ul>

				<ul>
					<h3>Hosting</h3>

					<li>Why Host</li>
					<li>Hospitality</li>
					<li>Responsible Hosting</li>
					<li>Home Safety</li>
					<li>Instant Book</li>
				</ul>
			</section>
		</div>
		
		<hr/>
		
		<div className="socialnetworks">
			<h2>Join Us On</h2>
			<section className="icons">
				
			
			</section>
		</div>
				
		<div className="copyright">	&copy; Airbnb, Inc.</div>


	</div>
</footer>
    </StyledMillerHome>
  )
}

export default MillerHome