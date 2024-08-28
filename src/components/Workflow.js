import React, { useEffect } from 'react'

export default function Workflow() {


  return (
    <div className='WorkflowContainder'>
        <div>
            <h4 className='WorkflowsubHead'>
                Work Flow Diagram
            </h4>
        </div>
        <div>
          <h1 className='WorkflowHead'>
            OUR DEVELOPMENT PROCESS
          </h1>
        </div>
        <div>
          <img className='ImWorkflow' src='Workflow.png' alt=''/>
        </div>
    </div>
  )
}
