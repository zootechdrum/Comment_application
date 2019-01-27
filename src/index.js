import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Alex" today="Today at 3:00"/>   
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Alec" today="Today at 1:00"/>
        </ApprovalCard>
        <ApprovalCard>
         <CommentDetail author="cesar" today="Today at 12:00"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Gomez" today="Today at 11:00"/> 
        </ApprovalCard>

        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));

