import { Link } from "react-router-dom"
export const Header =()=> {
    return(
        <>
       <nav className="navbar navbar-dark bg-dark">
            <div>
                <Link class="navbar-brand" href="#">NC News</Link>
            </div>
        </nav>
        
        </>
    )
    
}