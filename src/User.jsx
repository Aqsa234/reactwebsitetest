import React from "react";
import { useParams ,useLocation ,useHistory} from "react-router-dom";
// const  User = ({match}) => {
//     return <h1>user {match.params.name} </h1>;

// };

const  User = () => {
    const {name,lname}  = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return (
    <>
    <h1>user {name} {lname}</h1>
    <p>My current location is {location.pathname}</p>
    {location.pathname === `/user/aqsa/zubair` ? ( <button onClick= {() => history.push('/')}>Home page</button> ) : null }
    </>
    );

};
export default User;