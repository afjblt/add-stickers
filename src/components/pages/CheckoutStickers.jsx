import Footer from "../Footer";
import Header from "../Header";
import Steps from "../Steps";

function CheckoutStickers() {
    return ( 
        <>
            <Header text='Checkout'/>
            <Steps />
            <Footer to='/' text='CONCLUIR'/>
        </>
     );
}

export default CheckoutStickers;