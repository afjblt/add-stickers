import { Box, MenuItem, Select, Typography } from "@material-ui/core";
import Footer from "../Footer";

function Delivery() {
    return (
        <Box mb={15} mt={8} style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
         }}>
            <Typography variant="body1" style={{ color: '#000', marginBottom: '2rem', maxWidth: '90%',}} p={2}>Selecione um método de transporte</Typography>
            <Select
                label='Selecione um método de transporte'
            >
                <MenuItem value={10}>Sedex</MenuItem>
                <MenuItem value={20}>JadLog</MenuItem>
                <MenuItem value={30}>Kabum</MenuItem>
                <MenuItem value={40}>Amazon</MenuItem>
            </Select>
            <Footer to='' text='' classLink='disable'/>
        </Box> 
        
     );
}

export default Delivery;