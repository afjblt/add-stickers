import Button from '../Button';
import {BsPlusLg} from 'react-icons/bs'
import {AiOutlineMinus} from 'react-icons/ai'
import './styles.css'
import { useState } from 'react';

function Form() {
    const [amount, setAmount] = useState(0)

    function handleButtonPlus(e) {
        e.preventDefault()
        setAmount( amount + 1)
    }

    function handleButtonMinus(e) {
        e.preventDefault()
        if (amount > 0) {
            setAmount( amount - 1)
        }
    }

    function handleChangeAmount(e) {
        setAmount(Number(e.target.value))
        if (amount === 'NaN') {
            // alert('Este campo só aceita números')
            setAmount(0)
        }
    }

    console.log(amount);

    return ( 
        <form action="/" className='formContent'>
            <label>Quais adesivos:</label>

            <div className="checkboxes">
                <div className='checkbox'>
                    <input type="checkbox" name="stickersReact" id="stickersReact" />
                    <label htmlFor="stickersReact">React</label>
                </div>
                <div className='checkbox'>
                    <input type="checkbox" name="stickersVue" id="stickersVue" />
                    <label htmlFor="stickersVue">Vue</label>
                </div>
                <div className='checkbox'>
                    <input type="checkbox" name="stickersAngular" id="stickersAngular" />
                    <label htmlFor="stickersAngular">Angular</label>
                </div>
            </div>

            <label>Quantos adesivos de cada?</label>

            <div className="amountEach">
                <Button onClick={handleButtonMinus} classButton='minus'><AiOutlineMinus /></Button>
                <input type="text" onChange={handleChangeAmount} value={amount}/>
                <Button onClick={handleButtonPlus} classButton='plus'><BsPlusLg /></Button>
            </div>
            
            <label htmlFor="obs">Observações:</label>
            <textarea name="obs" id="obs" cols="30" rows="8" placeholder='Alguma dúvida? Recado?'></textarea>
            
        </form>
     );
}

export default Form;