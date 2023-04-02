import React, { useState, useEffect } from 'react'
import '../../styles/clock.scss';

const Clock = () => {

   const defaultState = {
      date: new Date(),
      age: 0,
      firstname: 'John',
      lastname: 'Doe'
   };

   const [user, setUser] = useState(defaultState);

   useEffect(() => {

      const intervalAge = setInterval(() => {
         updateUser();
      }, 1000);

      return () => {
         clearInterval(intervalAge);
      }
   });

   const updateUser = () => {
      return setUser({
         date: user.date,
         age: user.age + 1,
         firstname: user.firstname,
         lastname: user.lastname
      });
   };

   return (
      <div>
         <h2>
            Date: {user.date.toLocaleTimeString()}
         </h2>
         <h3>{user.firstname} {user.lastname}</h3>
         <h1>Age: {user.age}</h1>
      </div>
   );
};

export default Clock;