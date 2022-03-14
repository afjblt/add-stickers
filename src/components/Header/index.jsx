import {BsBoxSeam} from 'react-icons/bs'

import './styles.css'

function Header() {
    return ( 
        <header className='headerBox'>
            <p>Formulário <br /> para compra de <br /><span>Pacote de adesivos</span></p>
            <BsBoxSeam />
        </header>
     );
}

export default Header;