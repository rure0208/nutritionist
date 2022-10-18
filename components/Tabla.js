import React from 'react';
import {  useState } from 'react'
import { NumberInput,Tabs ,Modal,Overlay , NativeSelect,Center,Card,Button,Text,TextInput,Container,Space,Table, ScrollArea,Box,Input} from '@mantine/core';
import { IconPhoto, IconMessageCircle } from '@tabler/icons';
const Tabla = ({geb,peso}) => {

    const calcularMacro2=()=>{
    
        setgP2(gkgP2*peso)
        setkcakP2(gP2*4)
        setProteinas2((kcalP2/ geb)*100)
      
        setgL2(gkgL2*peso)
        setkcakL2(gL2*9)
        setLipidos2((kcalL2/ geb)*100)
      
        setCarbo2(100-(proteinas2+lipidos2))
        setkcakC2((carbo2*geb)/100)
        setgC2(kcalC2/4)
        setgkgC2(gC2/peso)
        
       }
     
     const [proteinas2,setProteinas2]=useState(0.0);
    const [kcalP2,setkcakP2]=useState(0.0);
    const [gkgP2,setgkgP2]=useState(0.0);
    const [gP2,setgP2]=useState(0.0);
    const [lipidos2,setLipidos2]=useState(0.0);
    const [kcalL2,setkcakL2]=useState(0.0);
    const [gkgL2,setgkgL2]=useState(0.0);
    const [gL2,setgL2]=useState(0.0);
    const [carbo2,setCarbo2]=useState(0.0);
    const [kcalC2,setkcakC2]=useState(0.0);
    const [gkgC2,setgkgC2]=useState(0.0);
    const [gC2,setgC2]=useState(0.0);
 
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
        <td>  <Input disabled  value={proteinas2.toFixed(2)}/></td>
        <td> <Input disabled  value={kcalP2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gP2.toFixed(2)}/></td>
        <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgP2}  onChange={( val) => setgkgP2(val)}/></td>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <th>Lipidos</th>
        <td>  <Input disabled  value={lipidos2.toFixed(2)}/> </td>
        <td> <Input disabled  value={kcalL2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gL2.toFixed(2)}/></td>
        <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgL2}  onChange={( val) => setgkgL2(val)}/></td>
      </tr>
      </tbody> 
      <tbody >
      <tr>
        <th>Carbohidratos</th>
        <td>   <Input disabled  value={carbo2.toFixed(2)}/></td>
        <td> <Input disabled  value={kcalC2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gC2.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgC2.toFixed(2)}/> </td>
      </tr>
      </tbody>
      <tbody>
        <tr>
        <th>Total</th>
        <td><Input disabled/></td>
        <td><Input disabled placeholder={geb.toFixed(2)}/></td>
        <td> <Button  onClick={()=>calcularMacro2()} variant="light" color="grape" radius="lg" size="xs" uppercase>
         Calcular
    </Button> </td>
        <td><Input disabled/></td>
        </tr>
      </tbody>
      </Table>
 
   
      
  )
}

export default Tabla