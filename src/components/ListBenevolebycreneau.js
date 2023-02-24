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
    useEffect(()=>{
        getcreneaux()
        getbenevoles(1)},[])
    
    
    
    return (
        <div>
            <h2>Benevoles by creneau</h2><select  name="choice" onChange={e=>getbenevoles(e.target.value)}>
            {creneaux.map((creneau) => <option value={creneau.idcreneau} >{creneau.debut}-{creneau.fin}</option>)}
                                      
                  </select>
            <ul>
                {benevoles.map((benevole) => (
                    <li key={benevole.id}>
                        {benevole.nombenevole} {benevole.prenom} {benevole.nomzone}
                        
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default ListBenevolebycreneau;
