import React from 'react';

// globaly available JS object -- passed between components without props
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});
    


export default authContext;