import React, { useState } from 'react';

const Jeu = (props) => {
    const [jeux, setJeux] = useState([]);

    const ajouterJeu = (jeu) => {
        setJeux([...jeux, jeu]);
    };

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
                <button type="submit">Ajouter Jeu</button>
            </form>
        </div>
    );
};

export default Jeu;
