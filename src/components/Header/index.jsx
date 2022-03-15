import {BsBoxSeam} from 'react-icons/bs'

import './styles.css'

function Header({ text }) {
    return ( 
        <header className='headerBox'>
            <p>{text} <br /> para compra de <br /><span>Pacote de adesivos</span></p>
            <BsBoxSeam />
        </header>
     );
}

export default Header;