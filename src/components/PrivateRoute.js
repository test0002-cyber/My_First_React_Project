import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useAuth } from '../contexts/AuthContext';
export default function PrivateRoute({ children, allowedRoles }) {
    const { user } = useAuth();
    if (!user)
        return _jsx("div", { className: "p-6", children: "Please login to access this section." });
    if (allowedRoles && !allowedRoles.includes(user.role))
        return _jsx("div", { className: "p-6", children: "Access denied" });
    return _jsx(_Fragment, { children: children });
}
