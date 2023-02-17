import React, { useState } from 'react';

const Benevole = (props) => {
    const [benevoles, setBenevoles] = useState([]);

    const ajouterBenevole = (benevole) => {
        setBenevoles([...benevoles, benevole]);
    };

    const supprimerBenevole = (id) => {
        setBenevoles(benevoles.filter((benevole) => benevole.id !== id));
    };

    return (
        <div>
            <h2>Benevoles</h2>
            <ul>
                {benevoles.map((benevole) => (
                    <li key={benevole.id}>
                        {benevole.name}
                        <button onClick={() => supprimerBenevole(benevole.id)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    ajouterBenevole({
                        id: Date.now(),
                        name: event.target.elements.nom.value,
                    });
                    event.target.elements.nom.value = '';
                }}
            >
                <input type="text" name="nom" />
                <input type="text" name="prenom"/>
                <input type="text" name="email"/>
                <button type="submit">Ajouter Bénévole</button>
            </form>
        </div>
    );
};

export default Benevole;
