import Stepper from "@material-ui/core/Stepper";
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from "@material-ui/core/Box";
import { useState } from "react";
import Button from "@material-ui/core/Button";  
import Delivery from "../Delivery";
import Payment from "../Payment";


function Steps() {
    const [currentStep, setCurrentStep] = useState(0)

    function next() {
        if (currentStep < 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    function back() {
        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
        
    }

    return ( 
        <Box mt={1}>
            <Stepper activeStep={currentStep} style={{ background: '#f2f2f2' }}>
                <Step>
                    <StepLabel>Dados de Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pagamento</StepLabel>
                </Step>
            </Stepper>
                {currentStep === 0 && <Delivery />}
                {currentStep === 1 && <Payment />}
            <Box ml={4.5}>
                <Button onClick={back}>Voltar</Button>
                <Button onClick={next}>Próximo</Button>
            </Box>
            
        </Box>
        
     );
}

export default Steps;