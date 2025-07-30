import React from 'react'
import type { SliderProps } from '@mui/material/Slider'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'

const StyledSlider = styled(Slider)(({ value }) => ({
    width: '100%',
    height: 4,
    padding: '10px 0 !important',
    margin: '0 !important',
    color: Array.isArray(value) ? '#D9D9D9' : '#00CC22',

    '& .MuiSlider-rail': {
        width: '100% !important',
        height: 4,
        backgroundColor: '#D9D9D9 !important',
        opacity: '1 !important'
    },

    '& .MuiSlider-track': {
        backgroundColor: '#00CC22 !important',
        border: 'none !important',
        height: 4
    },

    '& .MuiSlider-thumb': {
        width: '18px !important',
        height: '18px !important',
        backgroundColor: '#00CC22 !important',
        border: '1px solid white !important',
        boxShadow: '0 0 0 1px #00CC22 !important',

        '&:hover, &.Mui-active': {
            boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.2) !important'
        }
    }
}))

const SuperRange: React.FC<SliderProps> = (props) => {
    return <StyledSlider {...props} />
}

export default SuperRange