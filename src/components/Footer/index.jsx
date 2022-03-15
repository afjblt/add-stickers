import { Link } from 'react-router-dom';
import Button from '../Button'

import './styles.css'

function Footer({ to, text }) {
    return ( 
        <footer>
            <Button type='submit' classButton='submit'><Link to={to}>{text}</Link></Button>
        </footer>
     );
}

export default Footer;