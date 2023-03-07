import React, { useEffect, useState } from 'react';

const ListBenevolebycreneau = (props) => {
    const [benevoles, setBenevoles] = useState([]);
    const [creneaux, setCreneaux] = useState([]);
    const getbenevoles = (id)=>{
        let adress='http://localhost:3002/benevolezonecreneau/'+id
        console.log("jkjf",adress)
        fetch('http://localhost:3002/benevolezonecreneau/'+id)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setBenevoles(result);
              
            })
    }
    const getcreneaux = ()=>{
        fetch('http://localhost:3002/creneaux')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setCreneaux(result);
              
            })
    } 
    const supprimerRelation = async (relation) => {
        console.log(relation)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idbenevole: relation.idbenevole,idcreneau:relation.idcreneau,idzone:relation.idzone })
        };
        await fetch('http://localhost:3002/deleterelation', requestOptions)
            .then(response => {console.log(response)
            getbenevoles(relation.idcreneau)
        })
        
        
    }; 
    useEffect(()=>{
        getcreneaux()
        getbenevoles(1)},[])
    
    
    
    return (
        <div>
            <h2>Bénévoles par créneau</h2><select  name="choice" onChange={e=>getbenevoles(e.target.value)}>
            {creneaux.map((creneau) => <option value={creneau.idcreneau} >{creneau.debut}-{creneau.fin}</option>)}
                                      
                  </select>
                  <table class="styled-table">
    <thead>
        <tr>
            <th>Nom bénévole</th>
            <th>Zone</th>
            <th></th>
        </tr>
    </thead> 
        <tbody>
            
                {benevoles.map((benevole) => (
                    <tr key={benevole.id}>
                        <th>{benevole.nombenevole} {benevole.prenom}</th> 
                        <th>{benevole.nomzone}</th>
                        <th><button onClick={() => supprimerRelation(benevole)}>
                    Supprimer
                </button></th>
                        
                    </tr>
                ))}
            
        </tbody>
        </table>
            
            
        </div>
    );
};

export default ListBenevolebycreneau;
