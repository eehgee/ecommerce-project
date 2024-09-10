import React, { useState } from 'react';

interface PriceFilterProps {
    minPrice : number;
    maxPrice : number;
    onChange : (min: number, max: number) => void;
}

const PriceFilter : React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onChange }) => {
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMin(Number(e.target.value));
        onChange(Number(e.target.value), max);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.target.value));
        onChange(min, Number(e.target.value));
    };

    return (
        <div className="price-filter mb-8">
            <label className='pr-6'>
                최저 :
                <input type="number" value={min} onChange={handleMinChange} className='border-4 w-16 ml-2 dark:text-black'/>
            </label>
            <label>
                최대 :
                <input type="number" value={max} onChange={handleMaxChange} className='border-4 w-16 ml-2 dark:text-black'/>
            </label>
        </div>
    );
};

export default PriceFilter;
