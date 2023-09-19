const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

    listOfNeighbours.forEach(item => {
        item.forEach(country => { console.log(country) })
    })