import React from "react"
import PropTypes from "prop-types"
class SayHello extends React.Component {
  render () {
    return (
      <div>
        <h1>What's up, {this.props.name}?</h1>
      </div>
    );
  }
}

SayHello.propTypes = {
  name: PropTypes.string
};
export default SayHello
