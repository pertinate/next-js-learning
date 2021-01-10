import React, { createContext, useContext } from 'react';

interface Props {
    children: React.ReactNode;
}

const appContext = createContext({

});

function AppContext(props: Props) {
    let state = sharedState();

    return (
        <appContext.Provider value={state} >
            {props.children}
        </appContext.Provider>
    );
}

const sharedState = () => {
    return {

    };
};

export const useAppContext = () => useContext(appContext);

export default AppContext;
