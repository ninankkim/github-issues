import React, { useState } from 'react';

function Users() {
    const [ userName, setUserName ] = useState('');
    const [ users, setUsers ] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
        .then(res => 
            {if (res.status !== 200) 
            { throw Error(`Cannot Find': ${userName}}`)
            } return res;
            })
        .then(res => res.json())
        .then(data => {
            //concat take the array, adds in data, and then returns the new array
            setUsers(users.concat(data));
            setUserName('');
        })
        .catch(error => {
            alert('NOT A VALID USERNAME. TRY AGAIN.')
        })
    }

    return (
        <div>
            <h1>User Search </h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username:
                        <input type="text" value={userName} onChange={(event) => { setUserName(event.target.value) }}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
            <h2>Results</h2>
            <div>
                { users.map((user) => {
                    return <div>{ user.login } <img src={user.avatar_url}></img></div>
                }) }
            </div>
        </div>
    )
}

export default Users