import React, { useState,useEffect } from 'react';

const Unjeu = (props) => {
    const [jeu, setJeu] = useState([]);
    const [zones,setList] = useState([
        { value: 'flavor', label: 'flavor' },
        { value: 'yummy', label: 'yummy' },
        { value: 'red', label: 'red' },
        { value: 'green', label: 'green3' },
        { value: 'yellow', label: 'yellow' },
      ]);
    
    
    useEffect(()=>{
        fetch('http://localhost:3002/zones')
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setList(result);
          
        });
        setJeu(props.jeu)},[])

    const supprimerJeu = async (id) => {
        
        fetch('http://localhost:3002/jeux/'+id, { method: 'DELETE' })
        .then( await props.getjeux());
    };


    const updateJeu = async (jeu)=>{
       
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nomjeux: jeu.nomjeux,
                type:jeu.type,
                zone: jeu.zone})
        };
        fetch('http://localhost:3002/jeux/'+jeu.idjeux, requestOptions)
            .then(await props.getjeux())
            
        
        console.log(jeu)}
        
    const handleChangenom=(event)=>{
        let nouveau={idjeux:jeu.idjeux, nomjeux: event.target.value, type:jeu.type, zone:jeu.zone }
        
        setJeu(nouveau);
      }
      const handleChangetype=(event)=>{
        let nouveau={idjeux:jeu.idjeux, nomjeux: jeu.nomjeux, type:event.target.value, zone:jeu.zone }
        
        setJeu(nouveau);
      }
      const handleChangezone=(event)=>{
        let nouveau={idjeux:jeu.idjeux, nomjeux: jeu.nomjeux, type:jeu.type, zone:event.target.value }
        
        setJeu(nouveau);
      }
      const handleSubmit=(jeu)=>{

        console.log(jeu)
        var reg =/(\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+)/i
        
        if(jeu.nomjeux.match(reg)){
            alert("nom invalide")
        }
        
        else{
            updateJeu(jeu)
        }
      }







    return (
        <div>
            
                    <li key={jeu.idjeux}>
                    <input type="text" id={jeu.idjeux} value={jeu.nomjeux} onChange={handleChangenom}></input>
                    <select name="type" id={jeu.idjeux} value={jeu.type} onChange={handleChangetype}>
                    <option value="enfant">enfant</option>
                    <option value="famille">famille</option>
                    <option value="ambiance">ambiance</option>
                    <option value="initié">initié</option>
                    <option value="expert">expert</option>

                    </select>
                    <select name="zone" id={jeu.idjeux} value={jeu.zone} onChange={handleChangezone}>
                  {zones.map((zone) => <option value={zone.idzone} >{zone.nomzone}</option>)}
                  </select>
                        <button onClick={() => supprimerJeu(jeu.idjeux)}>Supprimer</button>
                        <button type="submit" onClick={()=>handleSubmit({
                            idjeux: jeu.idjeux,
                            nomjeux: jeu.nomjeux,
                            type:jeu.type,
                            zone: jeu.zone

                            


                        })}>Sauvegarder</button>
                    </li>
               
            
            
        </div>
    );
};

export default Unjeu;
