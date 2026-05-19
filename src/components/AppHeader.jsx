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
        <header>
            <nav className="navbar d-flex justify-content-start gap-4">
                <div className=" logo nav-brand">
                    Rick and Morty
                </div>

                <ul className="list-unstyled d-flex justify-content-between align-items-center gap-2">
                    {
                        menu.map( item =>(
                            <li key={item.id}>
                                <NavLink to={item.path}>{item.name} </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}