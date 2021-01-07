import { fromUnixTime } from 'date-fns'
import React from 'react'
import {GlobalContainer} from './styles';
export default function Container({children}) {
  return (
    <GlobalContainer>
      {children}
    </GlobalContainer>
  )
}
