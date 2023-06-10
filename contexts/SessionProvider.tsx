"use client"
import {SessionProvider as SP} from 'next-auth/react'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const SessionProvider = (props:Props) => {
  return (
    <SP>
        {props.children}
    </SP>
  )
}

export default SessionProvider