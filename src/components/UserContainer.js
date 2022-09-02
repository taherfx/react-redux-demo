import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from './redux'

const UserContainer = ({userData, fetchUsers}) => {
    useEffect(() => {
        fetchUsers()
    }, [])
  return (userData.loading ? <h2>loading...</h2> :
    userData.error ? <h2>userData.error</h2> :
    <div>
        <h2>User List</h2>
        {
            userData &&
            userData.users &&
            userData.users.map(user => {
                return <p key={user.id}>{user.name}</p>
            })
        }
    </div>
  )
}

const mapStateToPorps = (state) => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToPorps,mapDispatchToProps)(UserContainer)