

export function createTiles() {

    const tiles = document.getElementById('tilesContainer')

    const letterDiv = document.createElement('div')

    document.getElementById("letterDiv").style.color = "red"; 

    tiles.appendChild(letterDiv)
}

createTiles()