import React, { useEffect, useState } from 'react';

const Unbenevole = (props) => {
    const [benevole, setBenevole] = useState([]);
    
    useEffect(()=>{
        
        setBenevole(props.benevole)},[])
    

    const supprimerBenevole = async (id) => {
        
        fetch('http://localhost:3002/benevoles/'+id, { method: 'DELETE' })
        .then(await props.getbenevoles())
        
        
    };
    const updateBenevole = async (benevole)=>{
       
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nombenevole: benevole.nombenevole,
                prenom:benevole.prenom,
                email: benevole.email})
        };
        fetch('http://localhost:3002/benevoles/'+benevole.idbenevole, requestOptions)
            .then(await props.getbenevoles())
            
        
        console.log(benevole)}
    const handleChangenom=(event)=>{
        let nouveau={idbenevole:benevole.idbenevole, nombenevole: event.target.value, prenom:benevole.prenom, email:benevole.email }
        
        setBenevole(nouveau);
      }
      const handleChangeprenom=(event)=>{
        let nouveau={idbenevole:benevole.idbenevole, nombenevole: benevole.nombenevole, prenom:event.target.value, email:benevole.email }
        
        setBenevole(nouveau);
      }
      const handleChangeemail=(event)=>{
        let nouveau={idbenevole:benevole.idbenevole, nombenevole: benevole.nombenevole, prenom:benevole.prenom, email:event.target.value }
        
        setBenevole(nouveau);
      }
      const handleSubmit=(benevole)=>{

        console.log(benevole)
        var reg =new RegExp("[\s@&\.-]");
        var re = new RegExp("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$");
        
        if(benevole.nombenevole.match(reg)){
            alert("nom invalide")
        }
        else if (benevole.prenom.match(reg)){
            alert("prenom invalide")
        }
        else if(!benevole.email.match(re)){
            alert("mail invalide")
        }
        else{
            updateBenevole(benevole)
        }
      }
    return (
        <div>
            
            
                
                    <li key={benevole.idbenevole}>
                        
                        <input type="text" id={benevole.idbenevole} value={benevole.nombenevole} onChange={handleChangenom}></input>
                        <input type="text" id={benevole.idbenevole} value={benevole.prenom} onChange={handleChangeprenom}></input>
                        <input type="text" id={benevole.idbenevole} value={benevole.email} onChange={handleChangeemail}></input>
                        <button onClick={() => supprimerBenevole(benevole.idbenevole)}>
                            Supprimer
                        </button>
                        <button type="submit" onClick={()=>handleSubmit({
                            idbenevole: benevole.idbenevole,
                            nombenevole: benevole.nombenevole,
                            prenom:benevole.prenom,
                            email: benevole.email

                            //nom: event.target.elements.nom.value,
                            //prenom: event.target.elements.prenom.value,
                            //email: event.target.elements.email.value,


                        })}>Sauvegarder</button>
                    </li>
                
            
            
                
            
        </div>
    );
};

export default Unbenevole;
