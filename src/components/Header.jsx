import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto, 
    gastos,
    setGastos
}) => {
    return ( 

        <header>
            <h1>PLANIFICADOR DE GASTOS</h1>

            {isValidPresupuesto ? (
                
                <ControlPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    gastos={gastos}
                    setGastos={setGastos}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ) : (
                <NuevoPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
     );
}
 
export default Header;

