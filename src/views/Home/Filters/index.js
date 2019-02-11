import React from "react";
import "./filters.scss";

import Button from '../Button';

export default class Filters extends React.Component {

  render() {
    return (
      <div id="filters">
        <div className="controls">
          <div>filter1</div>
          <div>filter2</div>
          <div>filter3</div>
        </div>
        <div className="actions">
        <Button />
        </div>
      </div>
    );
  }
}