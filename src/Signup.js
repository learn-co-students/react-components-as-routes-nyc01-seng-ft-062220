import React from 'react'


class Signup extends React.Component{

    render(){
        return(
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Create username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Create password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
        )
    }
}

export default Signup