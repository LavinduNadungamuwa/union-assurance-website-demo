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
import Woman2Icon from '@mui/icons-material/Woman2';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

export default function Page4() {

    const [alignment, setAlignment] = useState('');
    
    // Get firstName, gender, and dateOfBirth from Redux store
    const firstName = useSelector((state) => state.userForm.firstName);
    const gender = useSelector((state) => state.userForm.gender);
    const dateOfBirth = useSelector((state) => state.userForm.dateOfBirth);

    // Calculate age from date of birth
    const calculateAge = (dob) => {
        if (!dob) return null;
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        // Adjust age if birthday hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    };

    const age = calculateAge(dateOfBirth);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/page5');
    };

    return (
        <div>
            <Navbar />
            <div className='page4-container'>
                <div className='text-container-1'>
                    <p>My name is {firstName || '(FirstName)'}</p>
                    <br />
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

                        <TextField id="outlined-basic" label="My (wife) is" variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Woman2Icon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                marginTop: '16px',
                                marginBottom: '16px',
                                width: '100%',
                                visibility: alignment === 'married' ? 'visible' : 'hidden'
                            }} />

                        <div className='button-container-1'>
                            <Button btnName={"Next"} onClick={handleNext}>
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
