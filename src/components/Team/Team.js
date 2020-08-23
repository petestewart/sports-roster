import React from 'react';
import PropTypes from 'prop-types';

import Roster from '../Roster/Roster';

import './Team.scss';

class Team extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  render() {
    const { team } = this.props;

    return (
      <div className="field" style={{ backgroundColor: `${team.bgcolor1}` }}>
        <Roster team={team} />
      </div>
    );
  }
}

export default Team;
