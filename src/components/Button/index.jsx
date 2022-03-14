import './styles.css'

function Button({ classButton, children, onClick }) {
    return ( 
        <button onClick={onClick} className={classButton}>{children}</button>
     );
}

export default Button;