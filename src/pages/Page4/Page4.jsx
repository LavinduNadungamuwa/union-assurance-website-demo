import React from 'react'
import Button from "../../common/component/Button/Button"
import "./style.css"
import Navbar from '../../common/component/Navbar/Navbar';
import BottomBar from '../../common/component/BottomBar/BottomBar';
import { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { setSpouseName, setMaritalStatus } from '../../store/slices/userFormSlice';
import CircularWithValueLabel from '../../common/component/ProgressBar/ProgressBar';

export default function Page4() {

    const [alignment, setAlignment] = useState('');
    const [spouseNameLocal, setSpouseNameLocal] = useState('');

    // Get firstName, gender, and dateOfBirth from Redux store
    const firstName = useSelector((state) => state.userForm.firstName);
    const gender = useSelector((state) => state.userForm.gender);
    const dateOfBirth = useSelector((state) => state.userForm.dateOfBirth);

    const dispatch = useDispatch();

    // Calculate age from date of birth
    const calculateAge = (dob) => {
        if (!dob) return null;
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        return age;
    };

    const age = calculateAge(dateOfBirth);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        dispatch(setMaritalStatus(newAlignment));
    };

    const handleSpouseNameChange = (event) => {
        setSpouseNameLocal(event.target.value);
        dispatch(setSpouseName(event.target.value));
    };

    const navigate = useNavigate();
    
    // Check if all required fields are filled
    const isFormValid = alignment && (alignment === 'single' || (alignment === 'married' && spouseNameLocal.trim()));

    const handleNext = () => {
        if (isFormValid) {
            navigate('/page5');
        }
    };

    return (
        <div>
            <Navbar>
                <CircularWithValueLabel value={50} />
            </Navbar>
            <div className='page4-container'>
                <div className='text-container-p4'>
                    <p>My name is {firstName || '(FirstName)'}</p>
                    <p>And I am a {gender || '(Gender)'} of {age !== null ? age : '(Age)'} years old.</p>
                </div>
                <div className='inner-container'>
                    <p className='page4-title'>Are you married?</p>
                    <Box className='form-box'>
                        <ToggleButtonGroup
                            className='toggle-button-group'
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="single">Single</ToggleButton>
                            <ToggleButton value="married">Married</ToggleButton>
                        </ToggleButtonGroup>

                        <TextField
                            id="outlined-basic"
                            label={`My ${gender === 'Male' ? 'wife' : gender === 'Female' ? 'husband' : '(wife/husband)'} is`}
                            variant="outlined"
                            value={spouseNameLocal}
                            onChange={handleSpouseNameChange}
                            sx={{
                                marginTop: '16px',
                                marginBottom: '16px',
                                width: '100%',
                                visibility: alignment === 'married' ? 'visible' : 'hidden'
                            }} />

                        <div className='button-container-1'>
                            <Button btnName={"Next"} onClick={handleNext} disabled={!isFormValid}>
                                <ArrowForwardIcon />
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}
