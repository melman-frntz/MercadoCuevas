import { useContext } from 'react';
import { AuthContext } from '../services/auth/authContext';

export const useAuth = () => {
    return useContext(AuthContext);
};