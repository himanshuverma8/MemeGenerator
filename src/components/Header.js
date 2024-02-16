import React from "react"
export default function Header(){
    return (
       <header className="header">
       <div className="header--comp1"> 
       <img src="https://files8.netlify.app/images/troll-face.png" className="header--logo" />
       <h2>Meme Generator</h2>
       </div>
       <img src="https://projects-hv.netlify.app/qrcode/lighting_logo_20211107_085802.png" className="header--logo" />
        {/* <h4 className="header--righttext">React Course - Project 3</h4> */}
         </header>
    )
}