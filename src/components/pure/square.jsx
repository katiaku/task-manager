import React, { useState } from 'react';


const Square = () => {

    const [color, setColor] = useState('#000000');
    const [manageInterval, setManageInterval] = useState(0);
    const [doubleClick, setDoubleClick] = useState(0);

    const getColor = () => Math.floor(Math.random() * 256);

    const getHex = (red, green, blue) => {
        return (
            '#' + [red, green, blue].map((c) => {
                const hex = c.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('')
        )
    }

    const generateHex = () => {
        const rgb = {
            r: getColor(),
            g: getColor(),
            b: getColor()
        };
        return setColor(getHex(rgb.r, rgb.g, rgb.b))
    }

    const onChangeColor = () => {
        return setManageInterval(setInterval(generateHex, 500))
    }

    const onStopChangeColor = () => {
        return clearInterval(manageInterval)
    }

    const onClickChangeColor = () => {
        return clearInterval(manageInterval)
    }

    return (
        <div 
            style={{width: '225px', height: '255px', backgroundColor: color}}
            onMouseOver={onChangeColor}
            onMouseLeave={onStopChangeColor}
            onDoubleClick={onClickChangeColor}
        >
        </div>
    );
}

export default Square;
