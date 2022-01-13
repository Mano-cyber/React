import React from 'react'

const commentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatarImg} />
            </a>
            <div className="content">
                <a href="/" className="autor">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.theText}</div>
            </div>
        </div>
    );
}

export default commentDetail;