import React from 'react'
import AllCandies from './AllCandies';
import { connect } from 'react-redux';
import { populateCandiesThunkActionCreator } from '../reducers/index'

class DisconnectedRoot extends React.Component {
  componentDidMount() {
    this.props.populateCandies();
  }

  render () {
    return (
      <div>
        <nav>
          Goodie Bag
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <AllCandies candies={this.props.candies} />
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    candies: state.candies
  };
}

const mapDispatchToPros = (dispatch) => {
  return {
    populateCandies: () => dispatch(populateCandiesThunkActionCreator())
  };
}

const Root = connect(mapStateToProps, mapDispatchToPros)(DisconnectedRoot);

export default Root;
