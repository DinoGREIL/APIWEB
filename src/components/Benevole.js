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
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombenevole: benevole.nombenevole, prenom:benevole.prenom, email:benevole.email })
        };
        await fetch('http://localhost:3002/benevoles', requestOptions)
            .then(response => console.log(response))
            
        getbenevoles();
        }
        
    };

    
    return (
        <div>
            <h2>Bénévoles</h2>
            <table class="styled-table">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {benevoles.map((benevole) => (
                    <Unbenevole benevole={benevole} getbenevoles={getbenevoles}/>
                ))}
        </tbody>
        </table>
            <ul>
                
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
            ><h3>Créer un bénévole</h3>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                <th><input type="text" name="nom"/></th>
                <th><input type="text" name="prenom"/></th>
                <th><input type="text" name="email"/></th>
                <th><button type="submit">Ajouter Bénévole</button></th>
                
                </tr>
                </tbody></table>
            </form>
        </div>
    );
};

export default Benevole;
