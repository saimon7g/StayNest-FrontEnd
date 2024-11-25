import React from 'react';
import {useState} from 'react';
import { TextInput,Button } from 'flowbite-react';


const PriceInput = ({placeholder,buttonText,negotiationId,handlePrice}) => {
    const [price,setPrice] = useState(0)
    return (
        <div className='flex items-center p-2'>
        <TextInput type="number" placeholder={placeholder} onChange={(e)=>setPrice(e.target.value)} />

        <Button className='ml-2' onClick={()=>handlePrice(price,negotiationId)}>{buttonText}</Button>
    </div>
    );
}

export default PriceInput;