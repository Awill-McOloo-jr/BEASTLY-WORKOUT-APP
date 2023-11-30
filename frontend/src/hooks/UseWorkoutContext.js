import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const UseWorkoutContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error ("UseWorkoutContext must be used within a workout context provider")
    }

    return context
}