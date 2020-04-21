import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import Approvalcard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <Approvalcard>
        <div>
          <h4>Warning</h4>
          Are You Sure You Want to do this?
        </div>
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="This is a comment 1"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>

      <Approvalcard>
        <CommentDetail
          author="Robert"
          timeAgo="Today at 4:15PM"
          comment="This is a comment 2"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>

      <Approvalcard>
        <CommentDetail
          author="Robin"
          timeAgo="Today at 4:30PM"
          comment="This is a comment 3"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
