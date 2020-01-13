import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RoleTable from '../roleTableComponent/roleTable'

class Room extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ws: null
    };
  }

  componentDidMount() {
    this.componentDidCatch();
  };

  timeout = 250;

  connect = () => {
    var ws = new WebSocket("ws://localhost:3000/ws");
    let that = this;
    var connectInterval;

    ws.onopen = () => {
      console.log("connected websocket room component");

      this.setState({ws:ws});

      that.timeout = 250;
      clearTimeout(connectInterval);
    };

    ws.onclose = e => {
      console.log(`Socket closed. Reconnect attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} seconds.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout;
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout));

    };

    ws.onerror = err => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();

    };

  };

  check = () => {
    const { ws } = this.state;
    if (!ws || ws.readyState === WebSocket.CLOSED) this.connect();
  };

  render() {
    return (
      <div className="main-content">

        <Link to='/'>
          <button id="back-btn" type="button" className="btn btn-danger">
            Go back
          </button>
        </Link>

        <h1>Welcome to room #{this.props.match.params.roomid}.</h1>
        <h2>It's under construction.</h2>

        <RoleTable />

      </div>
    );
  }
}

export default Room;
