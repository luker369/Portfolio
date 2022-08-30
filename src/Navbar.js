import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
// import Resume from '../assets/Resume.pdf';


const StyledNavbar = styled.div`
	font-family: 'Share Tech Mono', monospace;
	background-color: #111827;
  color: #475569;

.nav-container {
  display: none;

}
.nav-container-open {
  background-color: rgba(37, 51, 78, 0.95);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230c0c4f' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.uLstyle {
	margin: 0.75em 0;
	padding: 0 1rem;
	list-style: none;
}
.triangleList::before {
	content: '';
	border-color: transparent #00df9a;
	border-style: solid;
	border-width: 0.35em 0 0.35em 0.45em;
	display: block;
	height: 0;
	width: 0;
	left: -1em;
	top: 1.1em;
	position: relative;
}
.logo-img {
  height: auto;
  width: 2.5em;
}
.coolLists {
  cursor: pointer;
  color: rgb(148, 163, 184);
}
.coolLists:hover{
  color: #00df9a;
  transform: scale(1.02);
}
`;

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
	const handleClick = () => {
		setIsNavOpen(!isNavOpen);
	}
  return (
    <StyledNavbar>
      <div className="flex justify-between items-center h-24 max-w mx-auto px-4 text-slate-400">
			<img
				className="logo-img w-full text-3xl font-bold text-[#00df9a] m-4 w-10 h-10 border-2 border-emerald-400 rounded-full"
				src="https://i.etsystatic.com/22316940/r/il/639578/3090313044/il_1588xN.3090313044_5knq.jpg"
			/>
			<ul className="hidden md:flex ">
				<li className="p-1 px-4 coolLists">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="p-1 px-4 coolLists">
					<Link to="experience" smooth={true} duration={500}>
						Experience
					</Link>
				</li>
				<li className="p-1 px-4 coolLists">
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="p-1 px-4 coolLists">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<button className="px-2 mr-12 rounded border-2 bg-slate-800 border-emerald-400 hover:bg-emerald-900  text-emerald-400">
					<a href="#" target="_blank" rel="noreferrer">
						Resume
					</a>
				</button>
			</ul>

			{/* Mobile Menu */}
			<div onClick={handleClick} className="block md:hidden ">
				{isNavOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
			</div>
			<ul
        
				className={
					isNavOpen
						? 
            'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-800 ease-in-out duration-500 md:hidden z-10 nav-container-open'
						: 
            'ease-in-out duration-500 fixed left-[-100%] md:hidden nav-container '
				}
			>
				{/* <img
					className="w-full text-3xl font-bold text-[#00df9a] m-4 w-10 h-10 border-2 border-emerald-400 rounded-full"
					src=""
				/> */}

				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="experience" smooth={true} duration={500}>
						Experience
					</Link>
				</li>
				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<button className="p-2 mt-4 ml-3 rounded border-2 border-emerald-400 hover:bg-emerald-900  text-emerald-400 px-2;">
					<a href="#" target="_blank" rel="noreferrer">
						Resume
					</a>
				</button>
			</ul>
		</div>
    </StyledNavbar>
  )
};

export default Navbar