import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';



import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';


export default function Routes(){
    const {signed} = useContext(AuthContext)
    return(
        signed ? <AppRoutes /> :<AuthRoutes/>  
    )
}
