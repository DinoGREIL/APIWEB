import React, { useEffect, useState } from 'react';

const ListBenevolebyzone = (props) => {
    const [benevoles, setBenevoles] = useState([]);
    const [zones, setzones] = useState([]);
    const getbenevoles = (id)=>{
        fetch('http://localhost:3002/benevolecreneauzone/'+id)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setBenevoles(result);
              
            })
    }
    const getzones = ()=>{
        fetch('http://localhost:3002/zones')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setzones(result);
              
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
            getbenevoles(relation.idzone)
        })
        
        
    }; 
    useEffect(()=>{
        getzones()
        getbenevoles(1)},[])
    
    
    
    return (
        <div>
            <h2>Benevoles by zone</h2><select  name="choice" onChange={e=>getbenevoles(e.target.value)}>
            {zones.map((zone) => <option value={zone.idzone} >{zone.nomzone}</option>)}
                                      
                  </select>
                  <table class="styled-table">
    <thead>
        <tr>
            <th>Nom bénévole</th>
            <th>Créneau</th>
            <th></th>
        </tr>
    </thead> 
        <tbody>
            
                {benevoles.map((benevole) => (
                    <tr key={benevole.id}>
                        <th>{benevole.nombenevole} {benevole.prenom}</th> 
                        <th>{benevole.debut}-{benevole.fin}</th>
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

export default ListBenevolebyzone;
