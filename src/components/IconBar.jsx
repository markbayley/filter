import React from 'react'
import {Row} from 'react-bootstrap';

function IconBar() {
    return (
        <div>
            <Row style={{ position: "absolute", left: "112%", top: "6%"}}>
            <img src="img/icons/Location.svg" alt="location" height="40px"/>
            </Row>

            <Row style={{ position: "absolute", left: "112%", top: "26%"}}>
           <img src="img/icons/camera1.svg" alt="location" height="40px"/>
            </Row>
      
            <Row style={{ position: "absolute", left: "112%", top: "46%"}}>
            <img src="img/icons/calendar.svg" alt="location" height="40px"/>
            </Row>

            <Row style={{ position: "absolute", left: "112%", top: "62%"}}>
            <img src="img/icons/frequency.svg" alt="location" height="40px"/>
          </Row>      
        </div>
    )
}

export default IconBar
