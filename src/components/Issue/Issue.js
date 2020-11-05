import React from 'react'
import { Link } from 'react-router-dom'
import timeSince from '../../lib/timeSince'
import Icon from '../Icon/Icon'
import Label from '../Label/Label'
import './Issue.css'

export default function Issue(props) {
  const { issueData: issue } = props
  const time = timeSince(new Date(issue.created_at));

  return (
    <div className="Issue">
      <div className="Issue__icon">
        <Icon type={issue.state} />
      </div>
      <div className="Issue__details">
        <Link className="Issue__title" to={`/issues/${issue.number}`}>
          {issue.title}
        </Link>
        <span className="Issue__labels">
          { issue.labels.map(label => <Label key={label.id} label={label}/>)}
        </span>
        <div className="Issue__meta">
          #{issue.number} opened {time} by <a className="Issue__user" href={issue.user.html_url}>{issue.user.login}</a>
        </div>
      </div>
      <div className="Issue__extras">
        <div className="Issue__extra-col">
          {issue.pull_request && (
            <a className="Issues__extras-link" href={issue.pull_request.html_url}><Icon type="pull-request" /> 1</a>
          )}
        </div>
        <div className="Issue__extra-col">
          {issue.assignees.length > 0 && (
            issue.assignees.map(assignee => 
              <a className="Issues__extras-link" key={assignee.id} href={assignee.html_url}><img className="Issue__assignee-img" src={assignee.avatar_url} alt={assignee.login}/></a>
            )
          )}
        </div>
        <div className="Issue__extra-col">
          {issue.comments > 0 && (
            <a className="Issues__extras-link" href={issue.comments_url}><Icon type="comment" /> {issue.comments}</a>
          )}
        </div>
      </div>
    </div>
  )
}
