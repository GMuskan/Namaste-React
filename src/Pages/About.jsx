import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const About = () => {
    const { loggedInUser } = useContext(UserContext);
    return(
        <div>User: {loggedInUser}</div>
    )
}