import React from 'react'
import Navbar from '../../common/component/Navbar/Navbar'
import BottomBar from '../../common/component/BottomBar/BottomBar'
import './style.css'
import { Box } from '@mui/material'
import Button from '../../common/component/Button/Button'
import { grey } from '@mui/material/colors'
import AddIcon from '@mui/icons-material/Add';
import L1 from '../../assets/L1.png'
import L2 from '../../assets/L2.png'
import L3 from '../../assets/L3.png'
import L4 from '../../assets/L4.png'
import L5 from '../../assets/L5.png'
import L6 from '../../assets/L6.png'
import L7 from '../../assets/L7.png'
import { ArrowForward } from '@mui/icons-material'
import CircularWithValueLabel from '../../common/component/ProgressBar/ProgressBar';

export default function Page6() {
    return (
        <div>
            <Navbar>
                <CircularWithValueLabel value={100} />
            </Navbar>
            <Box className="page6-container">
                <Box className="upper-container-p6">
                    <p className="page6-title">What are your main goals in life?</p>
                    <div className='button-container-p6'>
                        <div className='button-wrapper-1'>
                            <Button btnName={'All goals'} className='button1' bgcolor={'white'} color={grey[600]} border={'1px solid #ccc'} />
                            <Button btnName={'Goal Timeline'} className='button2' bgcolor={'white'} color={grey[600]} border={'1px solid #ccc'} />
                        </div>
                        <Button className='button3' bgcolor={'white'} color={'#FE5000'}>
                            <AddIcon />
                            Add goal
                        </Button>
                    </div>
                </Box>
                <Box className="lower-container-p6">
                    <img src={L1} alt="Goal 1" />
                    <img src={L2} alt="Goal 2" />
                    <img src={L3} alt="Goal 3" />
                    <img src={L4} alt="Goal 4" />
                    <img src={L5} alt="Goal 5" />
                    <img src={L6} alt="Goal 6" />
                    <img src={L7} alt="Goal 7" style={{ width: '88%', height: 'auto', margin: '5px 21px' }} />
                </Box>
                <div className='next-button-container-p6'>
                    <Button btnName={'Next'} bgcolor={'#FE5000'} color={'white'}>
                        <ArrowForward />
                    </Button>
                </div>
            </Box>
            <BottomBar />
        </div>
    )
}

