import { NavLink } from "react-router-dom"

export default function AppHeader (){

    const menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },

          {
            id:2,
            name:'About',
            path:'/about'
        },

        {
            id:3,
            name:'Contacts',
            path:'/contacts'
        },

         {
            id:4,
            name:'Docs',
            path:'/docs'
        }
    ]

    return(
        <> 
         <header>
           <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        {
                            menu.map( item =>(
                                <li className="nav-item" key={item.id}>
                                    <NavLink className="nav-link" to={item.path}>{item.name} </NavLink>
                                </li>
                            ))
                        } 
                    </ul>                    
                </div>
            </div>
           </nav>
           
        </header>
    </>
    )
}