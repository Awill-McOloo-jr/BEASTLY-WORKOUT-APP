import { UseAuthContext } from "./UseAuthContext"
import { UseWorkoutContext} from './UseWorkoutContext'

export const useLogout = () => {
    const { dispatch } = UseAuthContext()
    const { dispatch: workoutsDispatch } = UseWorkoutContext()

    const logout = () => {
        //Remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}