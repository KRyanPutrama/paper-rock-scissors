function ceritanyaMusuh() {
    const choice = ["paper", "rock", "scissors"]
    return choice[Math.round(Math.random() * (choice.length - 1))]
}


function jankempong(string) {
    const musuh = ceritanyaMusuh()

    if(string !== 'rock' && string !== 'paper' && string !== 'scissors') {
        return 'please input only scissors, rock or paper only'
    } else {
        if (string === 'paper' && musuh === 'paper') {
            return 'draw'
        } else if (string === 'paper' && musuh === 'rock') {
            return 'You Win'
        } else if (string === 'paper' && musuh === 'scissors') {
            return 'You Lose'
        } else if (string == 'rock' && musuh === 'paper') {
            return 'You Lose'
        } else if (string == 'rock' && musuh === 'rock') {
            return 'draw'
        } else if (string == 'rock'  && musuh === 'scissors') {
            return 'You Win'
        } else if (string === 'scissors'  && musuh === 'rock') {
            return 'You Lose'
        } else if (string === 'scissors' && musuh === 'scissors') {
            return 'draw';
        } else if (string === 'scissors' && musuh === 'paper') {
            return 'You win'
        }
    }

}

console.log(jankempong('paper'))