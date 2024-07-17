
function UserGreeting(props)
{
    if(props.isLoggedIn)
    {
        return <h2 className="welcome-message">Welcome, {props.userName}</h2>
    }
    else
    {
        return <h2 className="login-prompt">Please Login</h2>
    }
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.boolean,
    userName: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}

export default UserGreeting