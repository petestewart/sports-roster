const createFormation = (players) => {
  const formation = {
    goal: [],
    back: [],
    mid: [],
    top: [],
  };
  players.forEach((player) => {
    switch (player.position.charAt(1)) {
      case 'K':
        formation.goal.push(player);
        break;
      case 'B':
        formation.back.push(player);
        break;
      case 'M':
        formation.mid.push(player);
        break;
      case 'F':
        formation.top.push(player);
        break;
      default:
        break;
    }
  });

  const sortLine = (line) => {
    line.sort((a, b) => {
      const position = (player) => {
        let x = player.position.charAt(0);
        let z = null;
        if (player.position.length > 2) {
          z = player.position.charAt(2);
        }
        if (x === 'C' || x === 'A' || x === 'D') {
          x = 'M';
        }
        let rank = x.charCodeAt(0);
        if (z) {
          if (z === 'L') { rank -= 1; }
          if (z === 'R') { rank += 1; }
        }
        return rank;
      };
      return (position(a) - position(b));
    });
    return line;
  };

  formation.back = sortLine(formation.back);
  formation.mid = sortLine(formation.mid);
  formation.top = sortLine(formation.top);

  return formation;
};

export default {
  createFormation,
};
