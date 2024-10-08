import { useLocation, Navigate, Outlet } from "react-router-dom";

export const RequireAuthAdmin = () => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('isAdmin') === 'true' ? true : false ;
    return (
        isAuthenticated
            ? 
            <Outlet />
            :
                <Navigate to="/sign-in" state={{ from: location }} replace />

           
            
    );
}


export const RequireAuthUser = () => {
    const location = useLocation();
    const isAuthenticated = 
    localStorage.getItem('isAdmin') === '' || 
    localStorage.getItem('isAdmin') === null ||
    localStorage.getItem('isAdmin') === undefined
     ? true :  false;
    console.log(isAuthenticated)
    return (
        !isAuthenticated
            ? 
            <Outlet />
            :
                <Navigate to="/sign-in" state={{ from: location }} replace />

           
            
    );
}
