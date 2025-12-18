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


export default function Page5() {
    const [kidsCount, setKidsCount] = useState(0);

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
                <div className='text-container'>
                    <p>My name is (FirstName)</p>
                    <br />
                    <p>And I am a (Gender) of (Age) years old.</p>
                    <br />
                    <p>I am married to (WifeName)</p>
                </div>
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
                                backgroundColor: '#grey',
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

                    <div className='button-container'>
                        <Button btnName={"Next"} onClick={handleNext}>
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                </Box>

            </div>
            <BottomBar />
        </div>
    )
}

