import { Link } from 'react-router-dom';

import './styles.css'

function Footer({ to, text, classLink }) {
    return ( 
        <footer>
            <Link className={`submit ${classLink}`} to={to}>
                {text}
            </Link>
        </footer>
     );
}

export default Footer;