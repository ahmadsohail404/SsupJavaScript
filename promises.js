const uno = () => {
    return "I am the one";
}

// const dos = async () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);
// }

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two")
        }, 3000);
    })
}

const tres = () => {
    return "I am three";
}

const callMe = async () => {
    let varOne = uno();
    console.log(varOne);

    let varTwo = await dos();
    console.log(varTwo);

    let varThree = tres();
    console.log(varThree);
}

callMe()