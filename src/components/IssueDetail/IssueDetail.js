import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown/with-html';
import timeSince from '../../lib/timeSince';

import './IssueDetail.css';

export default function IssueDetail() {
  const { number } = useParams();
  const [ issueData, setIssueData ] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`)
      .then(res => res.json())
      .then(data => {
        setIssueData(data);
      })
  }, [number])

  return (
    <div className="IssueDetail">
      { issueData && (
        <>
          <h1>{ issueData.title } <span style={{color: '#999'}}>#{issueData.number}</span></h1>
          <div>{issueData.user.login} created { timeSince(new Date(issueData.created_at)) }</div>
          <hr />
          <div className="markdown">
            <Markdown source={issueData.body} allowDangerousHtml={true} />
          </div>
        </>
      )}
    </div>
  )
}
