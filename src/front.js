export default function farewell(obj) {
    let farewell = null;
    if (obj.lifeExp == 0) {
        farewell = `You are dead, why didn't you bring a space helmet?`
    }
    else if (obj.lifeExp < 0) {
        farewell = `Wow, it looks like you've lived ` + obj.lifeExp + ` years on earth, ` + obj.mercuryExp + ` years on Mercury, ` + + obj.venusExp + ` years on Venus, ` + + obj.marsExp + ` years on Mars, and ` + obj.jupiterExp + ` years on Jupiter longer than you should have.`
        farewell = farewell.replace(/[/-]/g, '')
    } else {
        farewell = `You have ` + obj.lifeExp + ` years on earth, ` + obj.mercuryExp + ` years on Mercury, ` + + obj.venusExp + ` years on Venus, ` + + obj.marsExp + ` years on Mars, and ` + obj.jupiterExp + ` years on Jupiter left to live.`
    }
    return farewell;
}