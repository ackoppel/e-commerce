import './Billing.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import countries from 'i18n-iso-countries';

const Billing = ({ onNext, address }) => {
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
    
    const [ap, setAp] = useState('');
    const [strt, setStrt] = useState('');
    const [cty, setCty] = useState('');
    const [prvnc, setPrvnc] = useState('');
    const [zp, setZp] = useState('');
    const [cntry, setCntry] = useState('');
    const [adrInfo, setAdrInfo] = useState('');
    const [check, setCheck] = useState(true);

    const dbAddress = useSelector(state => state.customer.address);

    // The Address saved in database (used if available)
    const setDbAddress = () => {
        setAp(dbAddress.appartment_nr);
        setStrt(dbAddress.street);
        setCty(dbAddress.city);
        setPrvnc(dbAddress.province);
        setZp(dbAddress.zip);
        setCntry(dbAddress.country);
    };

    // the address saved in checkout state
    const setExistingAdr = () => {
        setAp(address.appartment_nr);
        setStrt(address.street);
        setCty(address.city);
        setPrvnc(address.province);
        setZp(address.zip);
        setCntry(address.country);
    };

    const resetAdr = () => {
        setAp('');
        setStrt('');
        setCty('');
        setPrvnc('');
        setZp('');
        setCntry('');
    };

    

    useEffect(() => {
        
        if(address !== '' && address.status === undefined){
            setExistingAdr();
            setAdrInfo('Existing');
        } else if(address === '' && address.status === undefined) {
            setAdrInfo('New');
        } else if (address !== '' && address.check !== false && address.status === 'Existing'){
            setExistingAdr();
            setAdrInfo('Existing');
        } else if (address !== '' && address.check === false && address.status === 'Existing'){
            setExistingAdr();
            setCheck(false);
            setAdrInfo('Existing');
        } else if (address !== '' && address.check !== false && address.status === 'New'){
            setExistingAdr();
            setAdrInfo('New');
        } else if (address !== '' && address.check === false && address.status === 'New'){
            setExistingAdr();
            setCheck(false);
            setAdrInfo('New');
        };
        
    }, []);

    const checkAdrStatus = () => {
        if(adrInfo === 'Existing' && check === true){
            //setAdrInfo('Other');
            setCheck(false);
            resetAdr();
        };
    };

    // Check if the entered country is valid and Move to Payment page
    const next = (e) => {
        e.preventDefault();
        if((countries.getAlpha2Code(cntry, 'en') === undefined && cntry !== '') || cntry === ''){
            document.getElementById('country-field').setCustomValidity('Please Enter a Valid Country');
        } else {
            const info = {
                appartment_nr: ap,
                street: strt,
                city: cty,
                province: prvnc,
                zip: zp,
                country: cntry,
                status: adrInfo,
                check: check
            };
            onNext(info);
        }
    };
    
    let adrInfoSelect;

    // Determine if user already has an address saved and offer to save new address or use existing address
    if(adrInfo === 'Existing'){
        adrInfoSelect = (
            <div className='billing-info-check-div' >
                <input data-testid='use-existing' type='checkbox' checked={check} onChange={(e) => {
                    setCheck(e.target.checked)
                    if(e.target.checked === true){
                        setDbAddress();
                    } else if(e.target.checked === false && address.check !== undefined && address.check !== true){
                        setExistingAdr();
                    } else {
                        resetAdr();
                    }
                }} />Use existing address
            </div>
        );
    } else if (adrInfo === 'New'){
        adrInfoSelect = (
            <div className='billing-info-check-div' >
                <input data-testid='save-address' type='checkbox' checked={check} onChange={(e) => {
                    setCheck(e.target.checked)
                }} />Save address
            </div>
        );
    };

    return(
        <form onSubmit={next} >
            <div className='billing-info' >
                <h2>BILLING</h2>
                <p>* we will use your saved name, email and phone</p>
                <p>* shipping is free</p>
                <div className='billing-info-row-div' >
                    <input data-testid='street' className='billing-info-row' type='text' value={strt} placeholder='STREET' onChange={(e) => {
                        checkAdrStatus();
                        setStrt(e.target.value);
                    }} required />
                    <input data-testid='appartment' className='billing-info-row' type='text' value={ap} placeholder='APPARTMENT' onChange={(e) => {
                        checkAdrStatus();
                        setAp(e.target.value);
                    }} required />
                </div>

                <div className='billing-info-row-div' >
                    <input data-testid='city' className='billing-info-row' type='text' value={cty} placeholder='CITY' onChange={(e) => {
                        checkAdrStatus();
                        setCty(e.target.value);
                    }} required />
                    <input data-testid='zip' className='billing-info-row' type='text' value={zp} placeholder='ZIP' onChange={(e) => {
                        checkAdrStatus();
                        setZp(e.target.value);
                    }} required />
                </div>

                <div className='billing-info-row-div' >
                    <input data-testid='province' className='billing-info-row' type='text' value={prvnc} placeholder='PROVINCE' onChange={(e) => {
                        checkAdrStatus();
                        setPrvnc(e.target.value);
                    }} required />
                    <input data-testid='country' className='billing-info-row' id='country-field' type='text' value={cntry} placeholder='COUNTRY' onChange={(e) => {
                        checkAdrStatus();
                        setCntry(e.target.value);
                        document.getElementById('country-field').setCustomValidity('');
                    }} required />
                </div>
                {adrInfoSelect}
            </div>
            <button className='next' type='submit' >NEXT</button>
        </form>
    );
};

export default Billing;