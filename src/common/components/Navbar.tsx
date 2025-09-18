import {NavLink} from "react-router";

export default function Navbar() {
    const menuItems = [
        {name: 'Strona główna', path: '/'},
        {name: 'Pokemony', path: '/pokemon'},
        {name: 'Informacje', path: '/info'},
        {name: 'Kontakt', path: '/contact'},
    ];

    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex gap-4">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({isActive}) =>
                                isActive ? 'font-bold underline' : 'hover:underline'
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
