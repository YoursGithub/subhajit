import React from 'react'
import logo from '../images/Frame 397.png'

function Desktopfooter() {
  return (
    <>
      <div className="absolute bottom-[10px] flex justify-center items-center">
    <p className="mx-5 text-[12px]">©2024 Tnennt All rights reserved.</p>
    <img width="30px" className="absolute left-[49vw]" src={logo} alt="" />
</div>
    </>
  )
}

export default Desktopfooter
