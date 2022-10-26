import logoLeft from '../../assets/logo.png';
import "./Header.css"

const Header = () => {



    return (
        <header className='App-header'>
            <img src={logoLeft} className="App-logo" alt="vecteezy.com" />
            <div>
                <h1 className="text-light">A <b>Treasure Hunt</b> for the November Kids</h1>
                <h1 className="text-light text-light-1">Are you ready ?? 🤠</h1>
            </div>
            
        </header>
    );
}

export default Header;
