import React from "react";

const App = () => {
    return (
        <div>
            <Message header="Attention!" text="We did an update" />
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="ui message">
            <div className="header">{props.header}</div>
            <p>{props.text}</p>
        </div>
    );
};

export default Message;