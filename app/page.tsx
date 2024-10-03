// "use client"
// import Tasks from "./components/Tasks/Tasks";
// import { useGlobalState } from "./context/globalProvider";

// export default function Home() {
//   const { tasks } = useGlobalState();

//   return <Tasks title="All Tasks" tasks={tasks} />;
// }

// "use client";  // This makes the component a Client Component

// import React, { useState } from "react";
// import Tasks from "./components/Tasks/Tasks";
// import { useGlobalState } from "./context/globalProvider";

// export default function Home() {
//     const { tasks, completedTasks, incompleteTasks, importantTasks } = useGlobalState();
//     const [filter, setFilter] = useState("all");

//     const getFilteredTasks = () => {
//         switch (filter) {
//             case "completed":
//                 return completedTasks;
//             case "incomplete":
//                 return incompleteTasks;
//             case "important":
//                 return importantTasks;
//             default:
//                 return tasks;
//         }
//     };

//     const filteredTasks = getFilteredTasks();

//     return (
//         <div>
//             <h1>All Tasks</h1>
//             <div>
//                 <button onClick={() => setFilter("all")}>All</button>
//                 <button onClick={() => setFilter("completed")}>Completed</button>
//                 <button onClick={() => setFilter("incomplete")}>Incomplete</button>
//                 <button onClick={() => setFilter("important")}>Important</button>
//             </div>
//             <Tasks title={`${filter} Tasks`} tasks={filteredTasks} />
//         </div>
//     );
// }


// "use client"; 

// import React, { useState } from "react";
// import Tasks from "./components/Tasks/Tasks";
// import { useGlobalState } from "./context/globalProvider";

// export default function Page() {
//     const { tasks, completedTasks, incompleteTasks, importantTasks } = useGlobalState();
//     const [filter, setFilter] = useState("all");

//     const getFilteredTasks = () => {
//         switch (filter) {
//             case "completed":
//                 return completedTasks;
//             case "incomplete":
//                 return incompleteTasks;
//             case "important":
//                 return importantTasks;
//             default:
//                 return tasks;
//         }
//     };

//     const filteredTasks = getFilteredTasks();

//     return (
//         <div>
//             <h1>All Tasks</h1>
//             {/* The buttons are handled in the sidebar */}
//             <Tasks title={`${filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks`} tasks={filteredTasks} />
//         </div>
//     );
// }


"use client";
import React, { useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";

export default function Page() {
    const { tasks, completedTasks, incompleteTasks, importantTasks } = useGlobalState();
    const [filter, setFilter] = useState("all");

    const getFilteredTasks = () => {
        switch (filter) {
            case "completed":
                return completedTasks;
            case "incomplete":
                return incompleteTasks;
            case "important":
                return importantTasks;
            default:
                return tasks;
        }
    };

    const filteredTasks = getFilteredTasks();

    return (
        <div>
            <h1>All Tasks</h1>
            <Tasks title={`${filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks`} tasks={filteredTasks} />
        </div>
    );
}
