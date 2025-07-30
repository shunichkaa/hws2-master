// common/c7-SuperRange/SuperRange.tsx
import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#00CC22',
                height: 8,
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: '0 0 0 8px rgba(63, 81, 181, 0.16)',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange