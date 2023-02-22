import React, { useEffect, useState } from 'react';

const Unbenevole = (props) => {
    const [benevole, setBenevole] = useState([]);
    
    useEffect(()=>{
        
        setBenevole(props.benevole)},[])
    

    const supprimerBenevole = (id) => {
        
        fetch('http://localhost:3002/benevoles/'+id, { method: 'DELETE' })
        .then(props.getbenevoles())
        
        
    };
    const updateBenevole = (benevole)=>{console.log(benevole)}
    const handleChangenom=(event)=>{
        let nouveau={id:benevole.id, nom: event.target.value, prenom:benevole.prenom, email:benevole.email }
        
        setBenevole(nouveau);
      }
    
    return (
        <div>
            
            
                
                    <li key={benevole.id}>
                        <input type="text" id={benevole.idbenevole} value={benevole.nombenevole} onChange={handleChangenom}></input>
                        <button onClick={() => supprimerBenevole(benevole.idbenevole)}>
                            Supprimer
                        </button>
                        <button onClick={()=>updateBenevole({
                            id: benevole.idbenevole,
                            //nom: event.target.elements.nom.value,
                            //prenom: event.target.elements.prenom.value,
                            //email: event.target.elements.email.value,


                        })}>Change</button>
                    </li>
                
            
            
                
            
        </div>
    );
};

export default Unbenevole;
