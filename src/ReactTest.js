import React from 'react';

class ReactTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gretting: 'hi',
    };
  }

  render() {
    return (
      <div>
        <span>hi</span>
        <div>{this.state.gretting}</div>
      </div>
    );
  }
}

export default ReactTest;
