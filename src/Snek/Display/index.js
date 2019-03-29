import React from 'react'
import './index.css'
import Legend from './__legend'
import Side from './__side'

function Display (props) {
  return (
    <div className = 'display'>
      <fieldset className = 'display__edging'>
        <Legend />
          <div className = 'display__borders'>
            <div className = 'display__glass'>
              <div className = 'display__frame'>
                {props.children}
              </div>
              <Side />
            </div>
          </div>
      </fieldset>
    </div>
  )
}

export default Display