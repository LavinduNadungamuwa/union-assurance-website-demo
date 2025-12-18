import React from 'react'
import Button from "../../common/component/Button/Button"
import "./style.css"
import Navbar from '../../common/component/Navbar/Navbar';
import BottomBar from '../../common/component/BottomBar/BottomBar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom"

export default function Page3() {
  const [state, setState] = useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const navigate = useNavigate();

    const handleNext = () => {
        navigate('/page4');
    };

  return (
    <div>
      <Navbar />
      <div className="page3-container">
        <div className='inner-container-p3'>
          <p className='page3-title'>Let’s get started by 
            telling a little bit about 
            yourself</p>
          <Box className='page3-form'>
            <div className='form-row-1'>
              <FormControl sx={{ minWidth: 90 }}>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  label="State"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Mr.</MenuItem>
                  <MenuItem value={2}>Mrs.</MenuItem>
                </Select>
              </FormControl>
              <TextField id="outlined-basic" label="First Name" variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '100%' }}
              />
            </div>

            <TextField id="outlined-basic" label="Last Name" variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: '16px', width: '100%' }}
            />

            <TextField
              id="dob-field"
              label="Date of Birth"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ marginBottom: '16px', width: '100%' }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <Button btnName={"Next"} onClick={handleNext}>
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
