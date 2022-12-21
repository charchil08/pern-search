import { Fragment, useState } from "react"

import React from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [users, setUsers] = useState([])

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:5000/users?name=${name}`)
      const usersRes = await res.json()
      setUsers(usersRes)
      setName("")
    }
    catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="my-5">Party List</h1>
        <form onSubmit={onSubmitForm} className="d-flex" >
          <input
            type="search"
            className="form-control"
            name=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="" />
          <button className="btn btn-success">Search</button>
        </form>
        <table className="table my-5" >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
              users.length > 0 &&
              users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          users.length === 0 && name !== "" && <p className="text-error" >No result found.</p>
        }
      </div>
    </Fragment>
  )
}

export default App

