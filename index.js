const flipCoin = () =>{
        const arr = ['heads', 'tails'];
        let rand = arr[Math.floor(Math.random() * arr.length)];
        return rand;
}

module.exports = flipCoin;