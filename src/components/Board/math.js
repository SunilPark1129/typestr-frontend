/*
This page calculates the current score.

Sunil Park
*/

export function totalScore(prop) {
    return prop.reduce((a, b) => {
        return Math.round((a + b) * 100) / 100;
    });
}

export function avgScore(prop) {
    let total = prop.reduce((a, b) => {
        return a + b;
    });
    return Math.round((total / prop.length) * 100) / 100;
}

export function bestScore(prop) {
    /* Prevent Mutate Original Array */
    let fastest = [...prop];

    fastest.sort((a, b) => {
        return a - b;
    });
    return fastest[1];
}

export function worstScore(prop) {
    /* Prevent Mutate Original Array */
    let worst = [...prop];

    worst.sort((a, b) => {
        return b - a;
    });
    return worst[0];
}