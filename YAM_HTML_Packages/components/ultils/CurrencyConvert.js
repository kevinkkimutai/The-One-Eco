import { useEffect, useState } from 'react';

const CurrencyConvert = (props) => {
    const [output, setOutput] = useState(props.amount);
    const currency = 'KSH';
    const currencySymbol = 'ksh ';

    useEffect(() => {
        // Convert USD to KSH (using approximate exchange rate)
        // You can update this rate or fetch from an API if needed
        const usdToKshRate = 129.50; // Approximate rate, update as needed
        setOutput((props.amount * usdToKshRate).toFixed(2));
    }, [props.amount]);

    // Format number with thousand separators
    const formatCurrency = (value) => {
        return parseFloat(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <span className={`money from-usd-${props.amount} to-${currency}`}>
            {currencySymbol}{formatCurrency(output)}
            {/* <span className='currency-name'>{currency}</span> */}
        </span>
    )
}
export default CurrencyConvert;