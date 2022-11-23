const userLeft = false;
const userWatchingCatMeme = true;

const watching = () => {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                username: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                username: 'user watching cat meme',
                message: 'cat > me'
            })
        } else {
            resolve('Thanks for staying')
        }
    })
}

watching().then((message) => {
    console.log(`success ${message}`);
}).catch((error) => {
    console.log(`${error.username} ${error.message}`);
})