import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,

} from './NavbarElement';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        
		<NavLink to='/Benevole' >
			Gestion Bénévoles
		</NavLink>
		<NavLink to='/Jeu' >
			Gestion Jeux
		</NavLink>
		<NavLink to='/Relation' >
			Association
		</NavLink>
		<NavLink to='/ListJeu' >
			Liste des jeux 
		</NavLink>
		<NavLink to='/' >
		Bénévoles par zone
		</NavLink>
		<NavLink to='/parcreneau'>
		Bénévoles par créneau
		</NavLink>
		
		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
