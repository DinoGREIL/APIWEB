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
     
    
    useEffect(()=>{
        
        getjeuxnom();
        
        
        },[])
    
    const changeorder=  (order)=>{
        if (order==="nom"){
             getjeuxnom()
            
        }
        else if(order==="type"){
             getjeuxtype()
            
        }
        else if(order==="zone"){
             getjeuxzone()
            
        }
        
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
                        {jeu.nomjeux} {jeu.type} {jeu.nomzone}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListJeux;
