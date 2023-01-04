import '../Style/Navbar.css'
export  default function Navbar(){
    const links=[{name : 'About ', link:'#'},
        {name : 'Projects', link:'#'},
        {name : 'Education', link:'#'},
        {name : 'Skills', link:'#'},
        {name : 'Contact', link:'#'}

    ]
    return(
        <div>
            <nav >
                <ul className='flex-row'>
                {links.map(p=> {
                    return <li key={p.name}><span>{p.name}</span></li>
                })}
            </ul></nav>

        </div>
    )
}