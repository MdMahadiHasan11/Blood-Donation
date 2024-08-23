import { useContext } from 'react';
import { AuthContext } from '../shareComponent/provider/AuthProvider';

const useAuth = () => {
const auth = useContext(AuthContext);
return auth;
};

export default useAuth;