import React from 'react'
import { SyncLoader } from 'react-spinners'

import "./Loading.css"
const Loading = () => {
  return (
    <div className="loading">
       <SyncLoader/>
    </div>
  )
}

export default Loading