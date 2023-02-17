import React, { useState,useEffect } from 'react';

const Jeu = (props) => {
    const [jeux, setJeux] = useState([]);
    const [zones,setList] = useState([
        { value: 'flavor', label: 'flavor' },
        { value: 'yummy', label: 'yummy' },
        { value: 'red', label: 'red' },
        { value: 'green', label: 'green3' },
        { value: 'yellow', label: 'yellow' },
      ]);
    const ajouterJeu = (jeu) => {
        setJeux([...jeux, jeu]);
    };
    useEffect(()=>{
        fetch('http://localhost:3002/zones')
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setList(result);
          
        });},[])

    const supprimerJeu = (id) => {
        setJeux(jeux.filter((jeu) => jeu.id !== id));
    };

    return (
        <div>
            <h2>Jeux</h2>
            <ul>
                {jeux.map((jeu) => (
                    <li key={jeu.id}>
                        {jeu.name}
                        <button onClick={() => supprimerJeu(jeu.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    ajouterJeu({
                        id: Date.now(),
                        name: event.target.elements.name.value,
                    });
                    event.target.elements.name.value = '';
                }}
            >
                <input type="text" name="name" />
                
                <select  name="type">
                            <option value="enfant">enfant</option>
                            <option value="famille">famille</option>
                            <option value="ambiance">ambiance</option>
                            <option value="initié">initié</option>
                            <option value="expert">expert</option>           
                  </select>
                  <select name="zone">
                  {zones.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                  </select>
                <button type="submit">Ajouter Jeu</button>
            </form>
        </div>
    );
};

export default Jeu;
