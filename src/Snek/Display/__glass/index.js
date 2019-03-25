import React from 'react'
import './index.css'
import Frame from '../__frame'
import Side from '../__side'
/* keypoint #1
* первый родитель. передаёт массив пикселей, которые нужно изменить
*/
function Glass() {
  return (
    <div className = 'display__glass'>
      <Frame pixels={[{x: 5, y: 5, status: 'on'}]}/>
      <Side />
    </div>
  )
}

export default Glass