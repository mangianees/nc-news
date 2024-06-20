import { Link } from "react-router-dom"
export const Header =()=> {
    return(
        <>
       <nav className="navbar navbar-dark bg-dark">
            <div>
                <Link className="navbar-brand" to="/">NC News</Link>
            </div>
        </nav>
        
        </>
    )
    
}