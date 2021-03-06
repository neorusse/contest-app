import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url)
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageHeader: 'Naming Contests',
      contests: []
    };
  }
  componentDidMount() {
    // ajax request
    axios.get('/api/contests')
      .then(res => {
        this.setState({
          contests: res.data.contests
        });
      })
      .catch(console.error)
  }
  componentWillUnmount() {

  }
  fetchContest(contestId) {
    pushState({ currentContestId: contestId}, `/contest/${contestId}`);
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  }
}

export default App;

