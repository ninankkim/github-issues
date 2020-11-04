import React, { useEffect, useState } from 'react'
import Issue from '../Issue/Issue';
import './IssueList.css';

export default function IssueList() {
  const [issues, setIssues] = useState([]);

  const loadIssues = () => {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
      .then(res => res.json())
      .then(data => {
        setIssues(data)
      })
  }

  useEffect(() => {
    loadIssues();
  }, [])

  return (
    <div className="IssueList">
      { issues.map((issue) => {
        return <Issue key={issue.id} issueData={issue} />
      }) }
    </div>
  )
}
