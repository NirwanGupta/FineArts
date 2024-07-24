import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar(isSidebarOpen) {
        const overlay = document.getElementById('overlay');
        if (isSidebarOpen) {
            overlay.style.display = 'block';
            document.body.classList.add('no-scroll');
        } else {
            overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    }


    const openSidebar = () => {
        // setIsSidebarOpen(true);
        setIsSidebarOpen(!isSidebarOpen);
        toggleSidebar(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return <AppContext.Provider value = {{isSidebarOpen, openSidebar, closeSidebar}}>
        {children}
    </AppContext.Provider>
} 

export const useGlobalContext = () => {
    return useContext(AppContext);
};