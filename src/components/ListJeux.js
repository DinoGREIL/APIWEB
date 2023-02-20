import React, { useEffect, useState } from 'react';

const ListJeux = (props) => {
    const [jeux, setJeux] = useState([]);
    const [zones, setZones] = useState([]);
    
    const getjeuxnom =  ()=>{
        fetch('http://localhost:3002/jeuxnom')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setJeux(result);
              
            })
    }
    const getjeuxtype =  ()=>{
        fetch('http://localhost:3002/jeuxtype')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setJeux(result);
              
            })
    }
    const getjeuxzone =  ()=>{
        fetch('http://localhost:3002/jeuxzone')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setJeux(result);
              
            })
    }
     
    const getzones =  ()=>{
        fetch('http://localhost:3002/zones')
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setZones(result);
              
            })
    }
    useEffect(()=>{
        
        getjeuxnom();
        getzones();
        regularise();
        },[])
    const regularise= ()=>{
        let jeuxwnom=jeux
        for (let i=0;i<jeux.length;i++){
            let change=false
            let j=0
            while (!change && j<zones.length){
                if(zones[j].id === jeux[i].zone){
                    jeux[i].nomzone=zones[j].nom
                    change=true
                }
                j+=1
            }
        }
        console.log("hahadff",jeuxwnom)
        setJeux(jeuxwnom)
        console.log("kvhdfv",jeux)
    }
    const changeorder= async (order)=>{
        if (order==="nom"){
            await getjeuxnom()
            
        }
        else if(order==="type"){
            await getjeuxtype()
            
        }
        else if(order==="zone"){
            await getjeuxzone()
            
        }
        regularise()
    }

    

    return (
        <div>
            <h2>Jeux by </h2><select  name="choice" onChange={e=>changeorder(e.target.value)}>
                            <option value="nom">nom</option>
                            <option value="type">type</option>
                            <option value="zone">zone</option>
                                      
                  </select>
            
                  <ul>
                {jeux.map((jeu) => (
                    <li key={jeu.id}>
                        {jeu.nom} {jeu.type} {jeu.zone}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListJeux;
