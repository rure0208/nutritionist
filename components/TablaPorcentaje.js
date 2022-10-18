import React from 'react';
import {  useState } from 'react'
import { NumberInput,Tabs ,Modal,Overlay , NativeSelect,Center,Card,Button,Text,TextInput,Container,Space,Table, ScrollArea,Box,Input} from '@mantine/core';
import { IconPhoto, IconMessageCircle } from '@tabler/icons';
const TablaPor = ({geb,peso}) => {

    const [error,setError]=useState("");
    const [lipidos,setLipidos]=useState(0.0);
    const [kcalP,setkcakP]=useState(0.0);
    const [gkgP,setgkgP]=useState(0.0);
    const [gP,setgP]=useState(0.0);
    
    const [proteinas,setProteinas]=useState(0.0);
    const [kcalL,setkcakL]=useState(0.0);
    const [gkgL,setgkgL]=useState(0.0);
    const [gL,setgL]=useState(0.0);
    
    const [carbo,setCarbo]=useState(0.0);
    const [kcalC,setkcakC]=useState(0.0);
    const [gkgC,setgkgC]=useState(0.0);
    const [gC,setgC]=useState(0.0);
    const calcularMacro=()=>{
      if((carbo+proteinas+lipidos)===100){
        setkcakP((proteinas*geb)/100)
        setgP(kcalP/4)
        setgkgP(gP/peso)
    
        setkcakL((lipidos*geb)/100)
        setgL(kcalL/9)
        setgkgL(gL/peso)
    
        setkcakC((carbo*geb)/100)
        setgC(kcalC/4)
        setgkgC(gC/peso)
        setError("")
      }else{
       
        setOpened(true)
      }
      
    
     }
    
    
  return (
    <Table>
      <thead>
        <tr>
          <th> </th>
          <th>%</th>
          <th>Kcal</th>
          <th>g</th>
          <th>g/Kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>Proteinas</th>
        <td> <NumberInput value={proteinas}  onChange={( val) => setProteinas(val)} /></td>
        <td> <Input disabled  value={kcalP.toFixed(2)}/> </td>
        <td> <Input disabled  value={gP.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgP.toFixed(2)}/> </td>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <th>Lipidos</th>
        <td> <NumberInput value={lipidos}  onChange={( val) => setLipidos(val)} /></td>
        <td> <Input disabled  value={kcalL.toFixed(2)}/> </td>
        <td> <Input disabled  value={gL.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgL.toFixed(2)}/> </td>
      </tr>
      </tbody> 
      <tbody >
      <tr>
        <th>Carbohidratos</th>
        <td> <NumberInput value={carbo}  onChange={( val) => setCarbo(val)} /></td>
        <td> <Input disabled  value={kcalC.toFixed(2)}/> </td>
        <td> <Input disabled  value={gC.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgC.toFixed(2)}/> </td>
      </tr>
      </tbody>
      <tbody>
        <tr>
        <th>Total</th>
        <td><Input disabled/></td>
        <td><Input disabled placeholder={geb}/></td>
        <td> <Button  onClick={()=>calcularMacro()} variant="light" color="grape" radius="lg" size="xs" uppercase>
         Calcular
    </Button> </td>
        <td><Input disabled/></td>
        </tr>
      </tbody>
      </Table>
     
  )
}

export default TablaPor