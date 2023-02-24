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
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nom: jeu.name, type: jeu.type, zone:jeu.zone })
        };
        await fetch('http://localhost:3002/jeux', requestOptions)
            .then(response => console.log(response))
            
        getjeux();
        
    };
    useEffect(()=>{
        fetch('http://localhost:3002/zones')
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setList(result);
          
        });
        getjeux()},[])

    const supprimerJeu = (id) => {
        
        fetch('http://localhost:3002/jeux/'+id, { method: 'DELETE' })
        .then(() => getjeux());
    };

    return (
        <div>
            <h2>Jeux</h2>
            <ul>
                {jeux.map((jeu) => (
                    <Unjeu getjeux={getjeux} jeu={jeu}/>
                ))}
            </ul>
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
            >
                <input type="text" name="name"/>
                
                <select  name="type">
                            <option value="enfant">enfant</option>
                            <option value="famille">famille</option>
                            <option value="ambiance">ambiance</option>
                            <option value="initié">initié</option>
                            <option value="expert">expert</option>           
                  </select>
                  <select name="zone">
                  {zones.map((zone) => <option value={zone.idzone} >{zone.nomzone}</option>)}
                  </select>
                <button type="submit">Ajouter Jeu</button>
            </form>
        </div>
    );
};

export default Jeu;
