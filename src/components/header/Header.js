import logoLeft from '../../assets/logo.png';
import "./Header.css"
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const logoClickHandler = () => {
        console.log('clicked')
        navigate('/Project13');
    }

    return (
        <header onClick={logoClickHandler} className='App-header'>
            <img src={logoLeft} className="App-logo" alt="vecteezy.com" />
            <div>
                <h1 className="text-light">A <b>Treasure Hunt</b> for the November Kids</h1>
                <h1 className="text-light text-light-1">🤠</h1>
            </div>
            
        </header>
    );
}

export default Header;
