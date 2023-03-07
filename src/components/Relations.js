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

    const ajouterRelation2 = async (relation)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idCreneau: relation.creneau, idBenevole:relation.benevole, idZone:relation.zone })
        };
        await fetch('http://localhost:3002/relations', requestOptions)
                    .then(response => {console.log(response)
                    alert("Bénévole assigné à ce créneau et à cette zone")})
    }
    
    const ajouterRelation = async (relation) => {
        
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idCreneau: relation.creneau, idBenevole:relation.benevole, idZone:relation.zone })
        };
        await fetch('http://localhost:3002/getrelations',requestOptions).then(response =>{
            if (response.status === 200){
                ajouterRelation2(relation)
            }
            else{
                alert("Ce bénévole est déjà occupé pour ce créneau")
            }
        }
        
        )
        
            
        
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
            ><table class="styled-table">
                <thead>
                    <tr>
                        <th>Créneau</th>
                        <th>Bénévole</th>
                        <th>Zone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><select name="creneau">
                  {creneaux.map((creneau) => <option value={creneau.idcreneau} >{creneau.debut} - {creneau.fin}</option>)}
                  </select></th>
                  <th><select name="benevole">
                  {benevoles.map((benevole) => <option value={benevole.idbenevole} >{benevole.nombenevole} {benevole.prenom}</option>)}
                  </select></th>
                  <th><select name="zone">
                  {zones.map((zone) => <option value={zone.idzone} >{zone.nomzone}</option>)}
                  </select></th>
                  <th><button type="submit">Ajouter Relation</button></th>
                    </tr>
                </tbody>
            </table>
                
                
                
                
            </form>
        </div>
    );
};

export default Relations;
