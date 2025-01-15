import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

const NaviSearch = ({history}) => {
    const [keyword, setkeyword] = useState('')

    const Handlesearch = (e) => {
        if(keyword.trim() && e.which === 13){
            history.push(`/search/${keyword}`)
        }else{
        }
    }
    return (
        <InputGroup >
        <Input value = {keyword} onChange = {e=> setkeyword(e.target.value)} bgColor='white' placeholder='Search here ...'  onKeyPress = {Handlesearch} ></Input>
        <InputRightElement children={ <MdSearch/>} />
        </InputGroup>


                          
        
        
    

    )
}

export default NaviSearch
