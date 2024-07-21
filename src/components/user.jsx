import { useParams } from "react-router-dom"

export function User(){
    const {userId} = useParams();
    return(
        <>
            <h1>User Details</h1>
            <p>User Id: <strong>{userId}</strong></p>
        </>
    )
}