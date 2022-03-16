import Footer from "../Footer";
import Header from "../Header";
import Success from "../Success/Success";

function PaymentConclued() {
    return ( 
        <>
            <Header text='Pagamento feito' />
            <Success />
            <Footer to='/' text='Voltar ao Formulário'/>
        </>
     );
}

export default PaymentConclued;