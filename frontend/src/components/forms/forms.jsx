import React from 'react'
import "./forms.css"
import CreateRoomForm from "./CreateRoomForm/CreateRoomForm";
import JoinRoomForm from './JoinRoomForm/JoinRoomForm';

const forms = () => {
    return (
        <div className="row h-100 pt-5">
            <div className="col-md-4 mt-5 form-box border border-2 rounded-2 mx-auto d-flex flex-column a">
                <h1>Create Room</h1>
                <CreateRoomForm />
            </div>
            <div className="col-md-4 mt-5 form-box border border-2 rounded-2 mx-auto d-flex flex-column a">
                <h1>Join Room</h1>
                <JoinRoomForm />
            </div>            
        </div>

    );
};

export default forms
