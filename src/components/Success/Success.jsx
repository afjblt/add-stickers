import { BsCheckCircle } from "react-icons/bs";
import './styles.css'

function Success() {
    return (
        <div className="paymentConclued">
            <h2>Pagamento feito com<br /> Sucesso</h2>
            <BsCheckCircle color="green"/>
        </div>
      );
}

export default Success;