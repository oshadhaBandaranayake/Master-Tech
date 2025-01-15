import React from 'react'
import {NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,FormControl,FormLabel} from "@chakra-ui/react"
    const ProductFilter = ({classac}) => {
        
    return (
        <div className = {`filterarea ${classac}`}>
        <div className = 'sortbydiv'>
            <h1> Sort By</h1>
            <ul>
                <li className = 'lined'>Default</li>
                <li className = 'lined'>Rating</li>
                <li className = 'lined'>Date</li>
                <li className = 'lined'>Low to high price</li>
                <li className = 'lined'>high to low price</li>
            </ul> 
        </div>
        <div className = 'pricediv'>
    
            <h1> Price</h1>
            <FormControl id="email">
                 <FormLabel>From :</FormLabel> 
                <NumberInput bg = 'white' borderRadius="md" borderTopRadius="md" borderTopLeftRadius="md">
                 <NumberInputField />
                 <NumberInputStepper>
                 <NumberIncrementStepper />
                 <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
            </FormControl>
            <FormControl id="email">
                 <FormLabel >To :</FormLabel>
                <NumberInput bg = 'white' borderRadius="md" borderTopRadius="md" borderTopLeftRadius="md">
                 <NumberInputField />
                 <NumberInputStepper>
                 <NumberIncrementStepper />
                 <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
            </FormControl>
        </div>
 
    </div>
    )
}
 
export default ProductFilter