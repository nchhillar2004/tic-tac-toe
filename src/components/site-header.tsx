import {Link} from "react-router-dom";

export default function SiteHeader(){
    return(
        <header className="py-2">
            <nav className="container flex items-center justify-between space-x-4">
                <Link to="/" className="font-semibold">iGames</Link>
                <ul className="flex-1 flex lg:justify-center justify-end">
                    <li><Link to="/game">Games</Link></li>
                </ul>
            </nav>
        </header>
    );
}
