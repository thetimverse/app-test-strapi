import { NumberInput as ArkNumberInput } from '@ark-ui/react'
import { styled } from '../../../styled-system/jsx'


const StNumberInputLabel = styled(ArkNumberInput.Label)`
    text-align: center;
    font-weight: 600;
    padding-bottom: 20px;
`
const StNumberInputInput = styled(ArkNumberInput.Input)`
    background-color: #fff;
    border: #c4c4c4 1px solid;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: max-content;
    color: #0a0a0a;
`
const StArkNumberInputIncrement = styled(ArkNumberInput.IncrementTrigger)`
    background-color: #0c0a09;
    color: #fff;
    border-radius: 5px;
    padding: 1px;
    margin-left: 10px;

    &:hover {
        background-color: #373750;
    }
`
const StArkNumberInputDecrement = styled(ArkNumberInput.DecrementTrigger)`
    background-color: #0c0a09;
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
    &:hover {
        background-color: #373750;
    }
`
function NumberInput () {
    return <ArkNumberInput.Root>
                <StNumberInputLabel>Add to cart</StNumberInputLabel>
                <ArkNumberInput.Control>
                    <StArkNumberInputDecrement>-</StArkNumberInputDecrement>
                    <StNumberInputInput />
                    <StArkNumberInputIncrement>+</StArkNumberInputIncrement>
                </ArkNumberInput.Control>
            </ArkNumberInput.Root>
}

export default NumberInput