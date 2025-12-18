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
import { JoinFullSharp } from '@mui/icons-material';
import { useSelector } from 'react-redux';


export default function Page5() {
    const [kidsCount, setKidsCount] = useState(0);

    // Get firstName, gender, and dateOfBirth from Redux store
    const firstName = useSelector((state) => state.userForm.firstName);
    const gender = useSelector((state) => state.userForm.gender);
    const dateOfBirth = useSelector((state) => state.userForm.dateOfBirth);
    const spouseName = useSelector((state) => state.userForm.spouseName);

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
    };

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/page6');
    };

    return (
        <div>
            <Navbar />
            <div className='page5-container'>
                <div className='page5-content'>
                    <div className='text-container-p5'>
                        <p>My name is {firstName || '(FirstName)'}</p>
                        <br />
                        <p>And I am a {gender || '(Gender)'} of {age !== null ? age : '(Age)'} years old.</p>   
                    </div>
                    <div className='kids-meter'>
                        <p className='text-container-p5'>I am married to {spouseName || '(WifeName)'}</p>
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
                                    marginTop: '-20px',
                                    '& .MuiSlider-valueLabel': {
                                        backgroundColor: 'grey',
                                    }
                                }}
                            />
                            <h2 style={{ color: 'grey' }}>there are</h2>

                            <Box sx={{
                                maxHeight: '200px',
                                overflowY: 'auto',
                                overflowX: 'hidden',
                                paddingRight: '10px',
                                marginBottom: '16px',
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
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end" sx={{ backgroundColor: 'lightgrey', padding: '3px 8px', borderRadius: '4px', fontSize: '14px' }}>
                                                        years old
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                width: '40%',
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
                    <div className='button-container-p5'>
                        <Button btnName={"Next"} onClick={handleNext}>
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

