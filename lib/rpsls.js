
  // Plays a round of Rock-Paper-Scissors against a random opponent
export function rps(playerShot) {
  // Define the possible options
  const options = ['rock', 'paper', 'scissors'];

  // If the player doesn't specify a shot, choose one randomly
  if (playerShot === undefined) {
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomShot = options[randomIndex];
    return {"player": randomShot};
  }
  else {
    // Normalize the player's shot to lowercase
    const normalizedShot = playerShot.toLowerCase();

    // Check if the player's shot is valid
    if (!options.includes(normalizedShot)) {
      return 'error';
    }
    else {
      // Choose a random shot for the opponent
      const randomIndex = Math.floor(Math.random() * options.length);
      const opponentShot = options[randomIndex];

      // Determine the result of the round
      let result = 'tie';
      if (normalizedShot === 'rock') {
        if (opponentShot === 'paper') {
          result = 'lose';
        }
        else if (opponentShot === 'scissors') {
          result = 'win';
        }
      }
      else if (normalizedShot === 'paper') {
        if (opponentShot === 'rock') {
          result = 'win';
        }
        else if (opponentShot === 'scissors') {
          result = 'lose';
        }
      }
      else if (normalizedShot === 'scissors') {
        if (opponentShot === 'rock') {
          result = 'lose';
        }
        else if (opponentShot === 'paper') {
          result = 'win';
        }
      }

      // Return the result of the round
      return {'player': normalizedShot, 'opponent': opponentShot, 'result': result};
    }
  }
}



 //Play rock-paper-scissors-lizard-spock against the computer
export function rpsls(shot) {
  // Define the options for the game
  const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  
  // If no shot is specified, choose a random option for the player
  if (shot === undefined) {
      return {"player": options[Math.floor(Math.random()*options.length)]};
  } 
  
  // Convert the player's shot to lowercase and check if it is a valid option
  shot = shot.toLowerCase();
  if (!options.includes(shot)) {
      return 'error';
  }
  
  // Choose a random option for the computer
  var opponent = options[Math.floor(Math.random()*options.length)];
  
  // Determine the result of the game based on the player's and computer's shots
  var result = 'tie';
  if (shot === 'rock') {
      if (opponent === 'paper' || opponent === 'spock') {
          result = 'lose';
      }
      else if (opponent === 'scissors' || opponent === 'lizard') {
          result = 'win';
      }
  }
  else if (shot === 'paper') {
      if (opponent === 'rock' || opponent === 'spock') {
          result = 'win';
      }
      else if (opponent === 'scissors' || opponent === 'lizard') {
          result = 'lose';
      }
  }
  else if (shot === 'scissors') {
      if (opponent === 'rock' || opponent === 'spock') {
          result = 'lose';
      }
      else if (opponent === 'paper' || opponent === 'lizard') {
          result = 'win';
      }
  }
  else if (shot === 'lizard') {
      if (opponent === 'rock' || opponent === 'scissors') {
          result = 'lose';
      }
      else if (opponent === 'spock' || opponent === 'paper') {
          result = 'win';
      }
  }
  else if (shot === 'spock') {
      if (opponent === 'paper' || opponent === 'lizard') {
          result = 'lose';
      }
      else if (opponent === 'rock' || opponent === 'scissors') {
          result = 'win';
      }
  }
  
  // Capitalize the player's and computer's shots if they chose 'spock'
  if (shot === 'spock') {
      shot = 'Spock';
  }
  if (opponent === 'spock') {
      opponent = 'Spock';
  }    
  
  // Return an object containing the player's shot, the computer's shot, and the result of the game
  return {'player': shot, 'opponent': opponent, 'result': result};
}
