import React, { useEffect, useState } from 'react';

const ListJeux = (props) => {
    const [jeux, setJeux] = useState([]);
    
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
            <h2>Jeux triés par  <select  name="choice" onChange={e=>changeorder(e.target.value)}>
                            <option value="nom">nom</option>
                            <option value="type">type</option>
                            <option value="zone">zone</option>
                                      
                  </select></h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Type</th>
                                <th>Zone</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                
                {jeux.map((jeu) => (
                    <tr key={jeu.id}>
                        <th>{jeu.nomjeux}</th> <th>{jeu.type}</th> <th>{jeu.nomzone}</th>
                        
                    </tr>
                ))}
            
                            
                        </tbody>
                    </table>
                  
        </div>
    );
};

export default ListJeux;
