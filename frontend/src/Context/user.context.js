import React, { createContext, useState, useContext } from 'react';

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [email, setEmail] = useState(null);

    return (
        <DataContext.Provider value={{ email, setEmail }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the context
export const useData = () => useContext(DataContext);
