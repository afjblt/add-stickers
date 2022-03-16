import { Container, TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import Footer from "../Footer";

function Payment() {
    return (
        <>
            <Container>
                <Stack
                    component='form'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '2rem',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type='number' label='Número do Cartão' variant="standard"/>
                    <TextField label='Nome' variant="standard"/>
                    <TextField label='Validade (MM/AA)' variant="standard"/>
                    <TextField type='number' label='CCV' variant="standard"/>
                </Stack>
            </Container>
            <Footer to='/concluido' text='CONCLUIR'/>
        </>
            
     );
}

export default Payment;