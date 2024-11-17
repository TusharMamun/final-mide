import React, { createContext } from 'react';
export const Authcontext = createContext()

 const Context = ({children}) => {
    const userInfo = {
        name:"Tushar"
    }

    return (
       <Authcontext.Provider value={userInfo}>
        {children}
       </Authcontext.Provider>
    );
};

export default Context;