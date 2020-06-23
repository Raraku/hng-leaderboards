import React from "react";
import { Header, Segment } from "semantic-ui-react";

const How = () => {
  return (
    <Segment>
      <Header>How To Use</Header>
      <p>
        This webapp accepts json data. It must be formatted as follows.
        "username, email, task, track, score"
      </p>
    </Segment>
  );
};
export default How;
