import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Issue from '../Issue/Issue';

export default function IssuesByLabel() {
  const { name } = useParams();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/facebook/create-react-app/issues?labels=${name}`)
      .then(res => res.json())
      .then(data => {
        setIssues(data)
      })
  }, [])

  return (
    <>
      <h1>Issues By Label: {name}</h1>
      <div className="IssueList">
        { issues.map((issue) => {
          return <Issue key={issue.id} issueData={issue} />
        }) }
      </div>
    </>
  )
}
