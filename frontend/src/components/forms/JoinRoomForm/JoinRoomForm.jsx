import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoomForm = () => {
  return (
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <input
          placeholder="Enter room code"
        />
      </div>
      <button
        className="mt-4 btn-primary btn-block form-control"
      >
        Join Room
      </button>
    </form>
  );
}

export default JoinRoomForm;