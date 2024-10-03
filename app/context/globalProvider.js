// "use client";
// import React, { createContext, useState, useContext } from "react";
// import themes from "./themes";
// import axios from 'axios';

// export const GlobalContext = createContext();
// export const GlobalUpdateContext = createContext();

// export const GlobalProvider = ({ children }) => {
//     const [selectedTheme, setSelectedTheme] = useState(0);
//     const [isLoading,setIsLoading]=useState(false);

//     const [tasks,setTasks]=useState([]);
//     const theme = themes[selectedTheme]; // This should work now
    
//     const allTasks=async ()=>{
//         setIsLoading(true);
//         try{
//             const res=await axios.get("/api/tasks");
//             setTasks(res.data);
//             setIsLoading(false);
//         } catch (error){
//             console.log(error);
//         }
//     };
    
//     React.useEffect(()=>{
//         allTasks();
//     },[]);
    
//     return (
//         <GlobalContext.Provider 
//         value={{ 
//             theme,
//             tasks,
//             }}
//             >
//             <GlobalUpdateContext.Provider value={{}}>
//                 {children}
//             </GlobalUpdateContext.Provider>
//         </GlobalContext.Provider>
//     );
// };

// export const useGlobalState = () => useContext(GlobalContext);
// export const useGlobalUpdate = () => useContext(GlobalUpdateContext);


// "use client";
// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios"; // Ensure axios is imported
// import themes from "./themes"; // Adjust the import path as needed

// export const GlobalContext = createContext();
// export const GlobalUpdateContext = createContext();

// export const GlobalProvider = ({ children }) => {
//     const [selectedTheme, setSelectedTheme] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);
//     const [tasks, setTasks] = useState([]);
//     const theme = themes[selectedTheme]; // This should work now

//     const allTasks = async () => {
//         setIsLoading(true);
//         try {
//             const res = await axios.get("/api/tasks");
//             console.log('API Response:', res.data); // Log the response data
//             setTasks(res.data); // Ensure this is an array
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         allTasks();
//     }, []);

//     return (
//         <GlobalContext.Provider value={{ theme, tasks }}>
//             <GlobalUpdateContext.Provider value={{}}>
//                 {children}
//             </GlobalUpdateContext.Provider>
//         </GlobalContext.Provider>
//     );
// };

// export const useGlobalState = () => useContext(GlobalContext);
// export const useGlobalUpdate = () => useContext(GlobalUpdateContext);


// "use client";
// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios";
// import themes from "./themes"; // Adjust the import path as needed

// export const GlobalContext = createContext();
// export const GlobalUpdateContext = createContext();

// export const GlobalProvider = ({ children }) => {
//     const [selectedTheme, setSelectedTheme] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);
//     const [tasks, setTasks] = useState([]);
//     const [completedTasks, setCompletedTasks] = useState([]);
//     const [incompleteTasks, setIncompleteTasks] = useState([]);
//     const [importantTasks, setImportantTasks] = useState([]);
//     const theme = themes[selectedTheme];

//     // Fetch all tasks from the API
//     const allTasks = async () => {
//         setIsLoading(true);
//         try {
//             const res = await axios.get("/api/tasks");
//             console.log("API Response:", res.data); // Debug log

//             if (Array.isArray(res.data)) {
//                 setTasks(res.data);
//             } else {
//                 console.error("Response data is not an array");
//             }
//         } catch (error) {
//             console.error("Error fetching tasks:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Filter tasks based on their status and importance
//     useEffect(() => {
//         const completed = tasks.filter((task) => task.isCompleted);
//         const incomplete = tasks.filter((task) => !task.isCompleted);
//         const important = tasks.filter((task) => task.isImportant);

//         setCompletedTasks(completed);
//         setIncompleteTasks(incomplete);
//         setImportantTasks(important);
//     }, [tasks]);

//     useEffect(() => {
//         allTasks(); // Fetch tasks on component mount
//     }, []);

//     // Update function to set selected theme
//     const updateTheme = (themeIndex) => {
//         setSelectedTheme(themeIndex);
//     };

//     return (
//         <GlobalContext.Provider
//             value={{
//                 theme,
//                 tasks,
//                 completedTasks,
//                 incompleteTasks,
//                 importantTasks,
//                 isLoading,
//             }}
//         >
//             <GlobalUpdateContext.Provider value={{ updateTheme }}>
//                 {children}
//             </GlobalUpdateContext.Provider>
//         </GlobalContext.Provider>
//     );
// };

// // Hooks to use Global State and Update functions
// export const useGlobalState = () => useContext(GlobalContext);
// export const useGlobalUpdate = () => useContext(GlobalUpdateContext);


// "use client";
// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios";
// import themes from "./themes"; // Adjust the import path as needed

// export const GlobalContext = createContext();
// export const GlobalUpdateContext = createContext();

// export const GlobalProvider = ({ children }) => {
//     const [selectedTheme, setSelectedTheme] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);
//     const [tasks, setTasks] = useState([]);
//     const [completedTasks, setCompletedTasks] = useState([]);
//     const [incompleteTasks, setIncompleteTasks] = useState([]);
//     const [importantTasks, setImportantTasks] = useState([]);
//     const theme = themes[selectedTheme];

//     // Fetch all tasks from the API
//     const allTasks = async () => {
//         setIsLoading(true);
//         try {
//             const res = await axios.get("/api/tasks");
//             console.log("API Response:", res.data); // Debug log

//             if (Array.isArray(res.data)) {
//                 setTasks(res.data);
//             } else {
//                 console.error("Response data is not an array");
//             }
//         } catch (error) {
//             console.error("Error fetching tasks:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Filter tasks based on their status and importance
//     useEffect(() => {
//         const completed = tasks.filter((task) => task.isCompleted);
//         const incomplete = tasks.filter((task) => !task.isCompleted);
//         const important = tasks.filter((task) => task.isImportant);

//         setCompletedTasks(completed);
//         setIncompleteTasks(incomplete);
//         setImportantTasks(important);
//     }, [tasks]);

//     // Fetch tasks on component mount
//     useEffect(() => {
//         allTasks();
//     }, []);

//     // Delete task function
//     const deleteTask = async (id) => {
//         try {
//             await axios.delete(`/api/tasks`, { data: { id } }); // Sending ID in the request body
//             setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//         } catch (error) {
//             console.error("Error deleting task:", error);
//         }
//     };

//     // Update task function
//     const updateTask = async (updatedTask) => {
//         try {
//             const res = await axios.put(`/api/tasks`, updatedTask); // Sending updated task data
//             setTasks((prevTasks) =>
//                 prevTasks.map((task) =>
//                     task.id === updatedTask.id ? res.data : task
//                 )
//             );
//         } catch (error) {
//             console.error("Error updating task:", error);
//         }
//     };

//     // Update theme function
//     const updateTheme = (themeIndex) => {
//         setSelectedTheme(themeIndex);
//     };

//     return (
//         <GlobalContext.Provider
//             value={{
//                 theme,
//                 tasks,
//                 completedTasks,
//                 incompleteTasks,
//                 importantTasks,
//                 isLoading,
//                 deleteTask, // Include deleteTask here
//                 updateTask,  // Include updateTask here
//             }}
//         >
//             <GlobalUpdateContext.Provider value={{ updateTheme }}>
//                 {children}
//             </GlobalUpdateContext.Provider>
//         </GlobalContext.Provider>
//     );
// };

// // Hooks to use Global State and Update functions
// export const useGlobalState = () => useContext(GlobalContext);
// export const useGlobalUpdate = () => useContext(GlobalUpdateContext);


"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import themes from "./themes"; // Adjust the import path as needed

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [incompleteTasks, setIncompleteTasks] = useState([]);
    const [importantTasks, setImportantTasks] = useState([]);
    const [modal, setModal] = useState(false);
    const theme = themes[selectedTheme];

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    // Fetch all tasks from the API
    const allTasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks");
            console.log("API Response:", res.data); // Debug log

            if (Array.isArray(res.data)) {
                setTasks(res.data);
            } else {
                console.error("Response data is not an array");
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Filter tasks based on their status and importance
    useEffect(() => {
        const completed = tasks.filter((task) => task.isCompleted);
        const incomplete = tasks.filter((task) => !task.isCompleted);
        const important = tasks.filter((task) => task.isImportant);

        setCompletedTasks(completed);
        setIncompleteTasks(incomplete);
        setImportantTasks(important);
    }, [tasks]);

    // Fetch tasks on component mount
    useEffect(() => {
        allTasks();
    }, []);

    // Delete task function
    const deleteTask = async (id) => {
        try {
            await axios.delete(`/api/tasks`, { data: { id } });
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // Update task function
    const updateTask = async (updatedTask) => {
        try {
            const res = await axios.put(`/api/tasks`, updatedTask);
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === updatedTask.id ? res.data : task
                )
            );
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // Update theme function
    const updateTheme = (themeIndex) => {
        setSelectedTheme(themeIndex);
    };

    return (
        <GlobalContext.Provider
            value={{
                theme,
                tasks,
                completedTasks,
                incompleteTasks,
                importantTasks,
                isLoading,
                modal,
                openModal,
                closeModal,
                deleteTask, // Include deleteTask here
                updateTask,  // Include updateTask here
            }}
        >
            <GlobalUpdateContext.Provider value={{ updateTheme }}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

// Hooks to use Global State and Update functions
export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
