import Stepper from "@material-ui/core/Stepper";
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Box } from "@mui/material";
import { useState } from "react";


function Steps() {
    const [currentStep, setCurrentStep] = useState(0)
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
        </Box>
        
     );
}

export default Steps;