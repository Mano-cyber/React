import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './approvalCard';
import Message from './message';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    name="Mano"
                    timeAgo="Yesterday at 14:00"
                    theText="Great shot!"
                    avatarImg={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    name="Jack"
                    timeAgo="Today at 11:23"
                    theText="Good performance!"
                    avatarImg={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    name="Mamba"
                    timeAgo="Today at 20:00" 
                    theText="Great blog!" 
                    avatarImg={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));