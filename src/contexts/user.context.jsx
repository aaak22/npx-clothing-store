// import { createContext, useState, useEffect, useReducer } from "react"; 
// import { createAction } from "../utils/reducer/reducer.utils";
// import { onAuthStateChangedListener, createUserDocFromAuth } from "../utils/firebase/firebase.utils";

// export const UserContext  = createContext({
    // setCurrentUser: () => null,
    // currentUser: null
// });

// const INITIAL_STATE = {
//     currentUser: null
// }
// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//     console.log('dispatched'); 
//     // console.log(action);
//     const { type, payload } = action;
//     // console.log("action type: ",action.type,"action payload :", payload);
//     switch(type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`Unhandley type ${type} in userReducer`)
//     }
// } 


// export const UserProvider = ({ children }) => {
    
//     // const [currentUser, setCurrentUser] = useState(null);

//     const [ { currentUser } , dispatch ] = useReducer(userReducer, INITIAL_STATE);
//     console.log(currentUser);

//     // const setCurrentUser = (user) => {
//     //     dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
//     //     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     // }
    
//     // const value = {currentUser, setCurrentUser};
//     // signOutUser();

//     // useEffect(() => {   
//     //     const unsubscribe = onAuthStateChangedListener((user) => {
//     //     //    console.log(user);
//     //     if(user){
//     //         createUserDocFromAuth(user)
//     //     }
//     //     setCurrentUser(user);
//     //     });
//     //    return unsubscribe;
//     // },[]);

//     return <UserContext.Provider value={value}>
//         {children}
//     </UserContext.Provider>
// }