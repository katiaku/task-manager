import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Component created')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Component update')
        }, 1000);

        return () => {
            console.log('Component will disappear');
            document.title = "Time stopped";
            clearInterval(intervalID);
        }
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
