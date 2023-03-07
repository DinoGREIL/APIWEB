import React, { useState,useEffect } from 'react';
import Unjeu from './Unjeu';

const Jeu = (props) => {
    const [jeux, setJeux] = useState([]);
    const [zones,setList] = useState([
        { value: 'flavor', label: 'flavor' },
        { value: 'yummy', label: 'yummy' },
        { value: 'red', label: 'red' },
        { value: 'green', label: 'green3' },
        { value: 'yellow', label: 'yellow' },
      ]);
    const getjeux=() =>{
        fetch('http://localhost:3002/jeux')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setJeux(result);
              
            })
    }
    const ajouterJeu = async (jeu) => {
        var reg =/(\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+)/i
        
        
        if(jeu.name.match(reg)){
            alert("nom invalide")
        }
        else{ 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nom: jeu.name, type: jeu.type, zone:jeu.zone })
        };
        await fetch('http://localhost:3002/jeux', requestOptions)
            .then(response => console.log(response))
            
        getjeux();}
        
    };
    useEffect(()=>{
        fetch('http://localhost:3002/zones')
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setList(result);
          
        });
        getjeux()},[])

    

    return (
        <div>
            <h2>Jeux</h2>
            <table class="styled-table">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Zone</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
{jeux.map((jeu) => (
                    <Unjeu getjeux={getjeux} jeu={jeu}/>
                ))}
    </tbody>
    </table>
    <h3>Créer un jeu</h3>
            
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    ajouterJeu({
                        id: Date.now(),
                        name: event.target.elements.name.value,
                        type: event.target.elements.type.value,
                        zone: event.target.elements.zone.value
                    });
                    event.target.elements.name.value = '';
                }}
            ><table class="styled-table"><thead><tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Zone</th>
                <th></th>
                
                </tr></thead>
                <tbody>
                    <tr>
                        <th><input type="text" name="name"/></th>
                        <th><select  name="type">
                            <option value="enfant">enfant</option>
                            <option value="famille">famille</option>
                            <option value="ambiance">ambiance</option>
                            <option value="initié">initié</option>
                            <option value="expert">expert</option>           
                  </select></th>
                        <th><select name="zone">
                  {zones.map((zone) => <option value={zone.idzone} >{zone.nomzone}</option>)}
                  </select></th>
                        <th><button type="submit">Ajouter Jeu</button></th>
                    </tr>
                </tbody>
                </table>
                
                
                
                  
                
            </form>
        </div>
    );
};

export default Jeu;
