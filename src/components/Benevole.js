import React, { useEffect, useState } from 'react';
import Unbenevole from './Unbenevole';
const Benevole = (props) => {
    const [benevoles, setBenevoles] = useState([]);
    const getbenevoles = ()=>{
        fetch('http://localhost:3002/benevoles')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setBenevoles(result);
              
            })
    }
    useEffect(()=>{
        
        getbenevoles()},[])
    const ajouterBenevole = async (benevole) => {
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombenevole: benevole.nombenevole, prenom:benevole.prenom, email:benevole.email })
        };
        await fetch('http://localhost:3002/benevoles', requestOptions)
            .then(response => console.log(response))
            
        getbenevoles();
    };

    
    return (
        <div>
            <h2>Benevoles</h2>
            <ul>
                {benevoles.map((benevole) => (
                    <Unbenevole benevole={benevole} getbenevoles={getbenevoles}/>
                ))}
            </ul>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    ajouterBenevole({
                        id: Date.now(),
                        nombenevole: event.target.elements.nom.value,
                        prenom: event.target.elements.prenom.value,
                        email: event.target.elements.email.value,

                    });
                    event.target.elements.nom.value = '';
                    event.target.elements.prenom.value = '';
                    event.target.elements.email.value = '';
                }}
            >
                <input type="text" name="nom"/>
                <input type="text" name="prenom"/>
                <input type="text" name="email"/>
                <button type="submit">Ajouter Bénévole</button>
            </form>
        </div>
    );
};

export default Benevole;
