import Footer from "../Footer";
import Form from "../Form";
import Header from "../Header";

function FormStickers() {
    return ( 
        <>
            <Header text="Formulário"/>
            <Form />
            <Footer to='/checkout' text='ENVIAR'/>
        </>
     );
}

export default FormStickers;