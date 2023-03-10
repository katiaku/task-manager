import React, { useState } from 'react';


const Square = () => {

    let red = 0;
    let green = 0;
    let blue = 0;

    const [color, setColor] = React.useState(`rgb(${red}, ${green}, ${blue})`);

    const styles = {
        height: '255px', 
        width: '255px', 
        backgroundColor: color
    };

    const generarValor = () => {
        return (Math.random() * 255).toFixed(0)
    }

    return (
        <div 
            style={styles}
            onMouseEnter={() => setColor(`rgb(${generarValor}, ${generarValor}, ${generarValor})`)}
            onMouseLeave={() => setColor({onMouseEnter})}
            onDoubleClick={() => setColor()}
        >
        </div>
    );
}

export default Square;
