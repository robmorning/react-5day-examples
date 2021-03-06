import React from 'react';

class User extends React.PureComponent {
  render() {
    const email = this.props.email ? <span className="email">{this.props.email}</span> : null;
    const active = this.props.active || false;
    const activeInfo = <span className="active">active: {active.toString()}</span>;

    return (
      <li>
        <span className="first-name">{this.props.firstName}</span>&nbsp;
        <span className="last-name">{this.props.lastName}</span>&nbsp;
        {email}&nbsp;
        {activeInfo}
      </li>
    );
  }
}

export default User;
