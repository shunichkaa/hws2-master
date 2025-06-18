import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'

type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => setOpen(prev => !prev)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'unset'
    }, [open])

    return (
        <>
            <Sidebar open={open} handleClose={handleClose} />
            <Header handleOpen={handleToggle} />
            <div>
                {children}
            </div>
        </>
    )
}