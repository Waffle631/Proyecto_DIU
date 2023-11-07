import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function BotonSeleccionar() {
    const [isSelected, setIsSelected] = useState(false);

    const handleButtonClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className='buttons'>
            <Button variant={isSelected ? 'success' : 'primary'} onClick={handleButtonClick}>
                {isSelected ? 'Seleccionado' : 'Seleccionar'}
            </Button>
        </div>
    );
}

export default BotonSeleccionar;