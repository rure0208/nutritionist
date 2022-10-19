import React from 'react'
import {  Button} from '@mantine/core';

const CalculosBmi = ({children,formula, setGeb, genero, peso, altura, edad, fa, setget}) => {
    
      
      const factor =()=>{
        /**value assignment depending on the selected */
        switch (fa) {
          case 'Sedentario':
            return(1.2)
            break;
          case 'Ligero':
            return(1.3);
            break;
          case 'Moderado':
            return(1.5);
            break;
          case 'Activo':
            return(1.7);
            break;
          case 'Vigoroso':
            return(1.9);
            break;
    
        }
    
      
      }
    
      /**Operations depending on the selected formula */
      const calculo = () => {
    /**Condition if you are a woman  */ 
        if (genero == 'Femenino') {
          /**Formula OMS */
          if(formula=='OMS'){
            setGeb(((parseFloat(peso) * 8.7) - (parseFloat(altura) * 25 / 100) + 865)* factor());
            setget((parseFloat(peso) * 8.7) - (parseFloat(altura) * 25 / 100) + 865);
          }
          /**Formula OWEN */
          else if (formula=='OWEN')
          {
            setGeb((795 + (7.18 * (parseFloat(peso))))*factor());
            setget(795 + (7.18 * (parseFloat(peso))));
          }
          /**Formula MIFFLIN*/
          else if(formula=='Mifflin')
          {
            setGeb(((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) - 161)*factor())
            setget((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) - 161);
          }
          /**Formula HARRIS */
          else if(formula =='Harries'){
            const geb= (655.1 + (9.56 * parseFloat(peso)) + (1.85 * parseFloat(altura)) - (4.68 * parseFloat(edad)));
            const fac= geb * factor();
            const ter= geb*0.10;
            setget(geb);
            setGeb(fac+ter);
          }
          else {
            if (edad >= 18 && edad <= 29) {
              setGeb((11.02 * (parseFloat(peso)) + 679)* factor());
              setget((11.02 * (parseFloat(peso)) + 679));
            }
            else if (edad >= 30 && edad <= 59) {
              setGeb((10.92 * (parseFloat(peso)) + 677)* factor());
              setget((10.92 * (parseFloat(peso)) + 677));
            }
            else if (edad >= 60) {
              setGeb((10.98 * (parseFloat(peso)) + 520)*factor());
              setget((10.98 * (parseFloat(peso)) + 520));
            }
            else if(edad<18)
            {
              alert('Debes de tener más de 18 años');
            }
          }
          
    
    
        }
        else {

          if(formula=='OMS'){
            setGeb(((parseFloat(peso) * 11.3) + (parseFloat(altura) * 16) / 100 + 901)* factor());
            setget(((parseFloat(peso) * 11.3) + (parseFloat(altura) * 16) / 100 + 901));
          }
          else if (formula=='OWEN')
          {
            setGeb((879 + (10.2 * (parseFloat(peso))))*factor())
            setget(((parseFloat(peso) * 11.3) + (parseFloat(altura) * 16) / 100 + 901));
          }
          else if(formula=='Mifflin')
          {
            setGeb(((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) + 5)*factor());
            setget(((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) + 5));
          }
          else if(formula =='Harries'){
            const geb= (66.5 + (13.75 * parseFloat(peso)) + (5 * parseFloat(altura)) - (6.78 * parseFloat(edad)));
            const fac= geb * factor();
            const ter= geb*0.10;
            setget(geb);
            setGeb(fac+ter);
          }
          else {
            if (edad >= 18 && edad <= 29) {
              setGeb((13.37 * (parseFloat(peso)) + 747)*factor());
              setget((13.37 * (parseFloat(peso)) + 747));
            }
            else if (edad >= 30 && edad <= 59) {
              setGeb((13.08 * (parseFloat(peso)) + 693)* factor()) ;
              setget((13.08 * (parseFloat(peso)) + 693));
            }
            else if (edad >= 60) {
              setGeb((14.21 * (parseFloat(peso)) + 429)* factor());
              setget((14.21 * (parseFloat(peso)) + 429));
            }
            else if(edad<18)
            {
              alert('Debes de tener más de 18 años');
            }
          }

        }
      }
  return (
    <div>
         <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} onClick={calculo}>Calcular</Button>

        
{children}
    </div>
  )
}

export default CalculosBmi