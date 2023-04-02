/**
 * Ejeplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Martín',
        email: 'martin@imaginagroup.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */

    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@imaginagroup.com'
            }
        )
    }

    return (
        <div>
            <h1>*** UseState() Example ***</h1>
            <h2>COUNT: {contador}</h2>
            <h2>PERSONAL DATA</h2>
            <h3>NAME: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            <button onClick={incrementarContador}>Increment counter</button>
            <button onClick={actualizarPersona}>Actualize personal data</button>
        </div>
    );
}

export default Ejemplo1;
