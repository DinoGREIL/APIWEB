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
        var reg =/(\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+)/i

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
    
                    <tr key={benevole.idbenevole}>
                        <th><input type="text" id={benevole.idbenevole} value={benevole.nombenevole} onChange={handleChangenom}></input></th>
                        
                        <th><input type="text" id={benevole.idbenevole} value={benevole.prenom} onChange={handleChangeprenom}></input></th>
                        <th><input type="text" id={benevole.idbenevole} value={benevole.email} onChange={handleChangeemail}></input></th>
                        <th><button onClick={() => supprimerBenevole(benevole.idbenevole)}>
                            Supprimer
                        </button></th>
                        <th>
                        <button type="submit" onClick={()=>handleSubmit({
                            idbenevole: benevole.idbenevole,
                            nombenevole: benevole.nombenevole,
                            prenom:benevole.prenom,
                            email: benevole.email

                        })}>Sauvegarder</button></th>
                    </tr>
                
            
            
                
            
        
    );
};

export default Unbenevole;
