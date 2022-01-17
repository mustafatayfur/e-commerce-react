import React from 'react'
import { Wrapper } from '../CartButtons/style'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>ComfySloth</span>
      </h5>
    </Wrapper>
  )
}



export default Footer
