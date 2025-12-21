import React from 'react'
import Button from "../../common/component/Button/Button"
import "./style.css"
import Navbar from '../../common/component/Navbar/Navbar';
import BottomBar from '../../common/component/BottomBar/BottomBar';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import CircularWithValueLabel from '../../common/component/ProgressBar/ProgressBar';

export default function Page5() {
    const [kidsCount, setKidsCount] = useState(0);
    const [kidsData, setKidsData] = useState([]);

    // Get firstName, gender, and dateOfBirth from Redux store
    const firstName = useSelector((state) => state.userForm.firstName);
    const gender = useSelector((state) => state.userForm.gender);
    const dateOfBirth = useSelector((state) => state.userForm.dateOfBirth);
    const spouseName = useSelector((state) => state.userForm.spouseName);
    const maritalStatus = useSelector((state) => state.userForm.maritalStatus);

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

    const handleSliderChange = (event, newValue) => {
        setKidsCount(newValue);
        // Initialize kidsData array when slider changes
        const newKidsData = Array.from({ length: newValue }, (_, index) =>
            kidsData[index] || { name: '', age: '' }
        );
        setKidsData(newKidsData);
    };

    const handleKidNameChange = (index, value) => {
        const newKidsData = [...kidsData];
        newKidsData[index] = { ...newKidsData[index], name: value };
        setKidsData(newKidsData);
    };

    const handleKidAgeChange = (index, value) => {
        const newKidsData = [...kidsData];
        newKidsData[index] = { ...newKidsData[index], age: value };
        setKidsData(newKidsData);
    };

    const navigate = useNavigate();

    const handleNext = () => {
        // If married and has kids, validate that all kid info is filled
        if (maritalStatus === 'married' && kidsCount > 0) {
            const allKidsFilled = kidsData.every(kid => kid.name.trim() && kid.age);
            if (!allKidsFilled) {
                alert('Please fill in all information for each child (name and age).');
                return;
            }
        }
        navigate('/page6');
    };

    // Check if form is valid
    const isFormValid = maritalStatus !== 'married' || kidsCount === 0 ||
        (kidsData.length === kidsCount && kidsData.every(kid => kid.name.trim() && kid.age));

    return (
        <div>
            <Navbar marginBottom="20px">
                <CircularWithValueLabel value={75} />
            </Navbar>
            <div className='page5-container'>
                <div className='page5-content'>
                    <div className='text-container-p5'>
                        <p>My name is {firstName || '(FirstName)'}</p>
                        <p>And I am a {gender || '(Gender)'} of {age !== null ? age : '(Age)'} years old.</p>
                        <p>
                            {maritalStatus === 'married'
                                ? `I am married to ${spouseName || '(WifeName)'}`
                                : maritalStatus === 'single'
                                    ? 'I am single'
                                    : 'I am married to (WifeName)'}
                        </p>
                    </div>
                    {maritalStatus === 'married' && (
                        <div className='kids-meter'>
                            <p className='page5-title'>I have (kids)</p>
                            <Box className='form-box'>
                                <Slider
                                    value={kidsCount}
                                    onChange={handleSliderChange}
                                    min={0}
                                    max={10}
                                    step={1}
                                    marks
                                    valueLabelDisplay="on"
                                    sx={{
                                        color: '#FE5000',
                                        '& .MuiSlider-valueLabel': {
                                            backgroundColor: 'grey',
                                        }
                                    }}
                                />
                                <h2 style={{ color: 'grey', marginBottom: '5px' }}>they are</h2>

                                <Box sx={{
                                    maxHeight: '200px',
                                    overflowY: 'auto',
                                    overflowX: 'hidden',
                                    paddingRight: '10px',
                                    '&::-webkit-scrollbar': {
                                        width: '8px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        backgroundColor: '#f1f1f1',
                                        borderRadius: '10px',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#FE5000',
                                        borderRadius: '10px',
                                    },
                                    '&::-webkit-scrollbar-thumb:hover': {
                                        backgroundColor: '#e04600',
                                    }
                                }}>
                                    {Array.from({ length: kidsCount }, (_, index) => (
                                        <div className='form-row' key={index}>
                                            <TextField
                                                id={`kid-name-${index}`}
                                                label={`Kid ${index + 1} is`}
                                                variant="outlined"
                                                type="text"
                                                value={kidsData[index]?.name || ''}
                                                onChange={(e) => handleKidNameChange(index, e.target.value)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <AccessibilityNewIcon sx={{ fontSize: '20px' }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    width: '60%',
                                                    marginBottom: '10px',
                                                    '& .MuiInputBase-root': {
                                                        height: '45px'
                                                    }
                                                }}
                                            />

                                            <TextField
                                                id={`kid-age-${index}`}
                                                variant="outlined"
                                                type="number"
                                                value={kidsData[index]?.age || ''}
                                                onChange={(e) => handleKidAgeChange(index, e.target.value)}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end" sx={{ backgroundColor: 'lightgrey', padding: '5px', borderRadius: '4px', fontSize: '10px', width: 'fit-content' }}>
                                                            years old
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    width: '50%',
                                                    padding: '0',
                                                    marginBottom: '10px',
                                                    '& .MuiInputBase-root': {
                                                        height: '45px'
                                                    }
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Box>


                            </Box>
                        </div>
                    )}
                    <div className='button-container-p5'>
                        <Button btnName={"Next"} onClick={handleNext} disabled={!isFormValid}>
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

