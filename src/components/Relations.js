import React, { useEffect, useState } from 'react';

const Relations = (props) => {
    const [benevoles, setBenevoles] = useState([]);
    const [zones, setZones] = useState([]);
    const [creneaux, setCreneaux] = useState([]);
    const getbenevoles = ()=>{
        fetch('http://localhost:3002/benevoles')
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
    const getzones = ()=>{
        fetch('http://localhost:3002/zones')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setZones(result);
              
            })
    }
    useEffect(()=>{
        
        getbenevoles();
        getzones();
        getcreneaux()},[])
    const ajouterRelation = async (relation) => {
        console.log(relation)
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idCreneau: relation.creneau, idBenevole:relation.benevole, idZone:relation.zone })
        };
        await fetch('http://localhost:3002/relations', requestOptions)
            .then(response => console.log(response))
            
        
    };

    

    return (
        <div>
            <h2>Relations</h2>
            
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    ajouterRelation({
                        id: Date.now(),
                        creneau: event.target.elements.creneau.value,
                        benevole: event.target.elements.benevole.value,
                        zone: event.target.elements.zone.value,

                    });
                    
                }}
            >
                <select name="creneau">
                  {creneaux.map((creneau) => <option value={creneau.id} >{creneau.debut} - {creneau.fin}</option>)}
                  </select>
                <select name="benevole">
                  {benevoles.map((benevole) => <option value={benevole.id} >{benevole.nom} {benevole.prenom}</option>)}
                  </select>
                <select name="zone">
                  {zones.map((zone) => <option value={zone.id} >{zone.nom}</option>)}
                  </select>
                <button type="submit">Ajouter Relation</button>
            </form>
        </div>
    );
};

export default Relations;
