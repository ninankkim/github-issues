import React from 'react'
import './Issue.css'

export default function Issue(props) {
  return (
    <div className="Issue">
      { props.issueData.title }
    </div>
  )
}
