import React, { useEffect, useState } from 'react';

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
            body: JSON.stringify({ nom: benevole.nom, prenom:benevole.prenom, email:benevole.email })
        };
        await fetch('http://localhost:3002/benevoles', requestOptions)
            .then(response => console.log(response))
            
        getbenevoles();
    };

    const supprimerBenevole = (id) => {
        //fetch('http://localhost:3002/relations/'+id, { method: 'DELETE' })
        fetch('http://localhost:3002/benevoles/'+id, { method: 'DELETE' })
        .then(() => getbenevoles())
        
        
    };

    return (
        <div>
            <h2>Benevoles</h2>
            <ul>
                {benevoles.map((benevole) => (
                    <li key={benevole.id}>
                        {benevole.nom}
                        <button onClick={() => supprimerBenevole(benevole.id)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    ajouterBenevole({
                        id: Date.now(),
                        nom: event.target.elements.nom.value,
                        prenom: event.target.elements.prenom.value,
                        email: event.target.elements.email.value,

                    });
                    event.target.elements.nom.value = '';
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
