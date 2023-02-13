import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const myNews=(main,sub,read)=>(
        <div className='widgetNews'>
            <div className='newsLeft'>
                    <FiberManualRecordIcon />
            </div>
            <div className='newsRight'>
                <h4>{main}</h4>
                <p>{sub}</p>
                {read && <p>{read}</p>}
            </div>
        </div>
    )
  return (
    <div className='Widgets'>
        <div className='WidgetHead'>
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>
        <div className='widgetBody'>
            {
                myNews(" Mani_Mestro is Back " ,"TopNews - Manikanta Bulit his First Ever React Project")
            }
            {
                myNews(" RGUKT-NUZVID" ,"TopNews - 1090" ,"readers")
            }
            {
                myNews("Li Found At kashmir" ,"TopNews - 1090" ,"readers")
            }
        </div>
    </div>
  )
}

export default Widgets