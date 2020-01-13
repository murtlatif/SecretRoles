import React from 'react';

function handleClick() {

  let generatedRoom = Math.floor(Math.random() * 99999 + 1)
  window.location.href = '/room/' + generatedRoom

}

function Homepage() {
  return (
    <div className="main-content">

      <h1>Secret Roles</h1>
      <h2>The random role assigner for party games.</h2>

      <button onClick={handleClick} id="room-btn" type="button" className="btn btn-lg btn-success">
        Join a room
      </button>

    </div>
  );
}

export default Homepage;
