var objectTypes = [
    "Chair",
    "Table",
    "Lamp",
    "Sofa",
    "Cup",
    "Book",
    "Pen",
    "Laptop",
    "Phone",
    "Plant",
    "Backpack",
    "Clock",
    "Bottle",
    "Wallet",
    "Shoes"
];

function chooseRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function createDungeon(roomsCount) {
    var rooms = [];

    for(var i = 0; i < roomsCount; i++) {
        var room = {};

        room.objects = [];
        for(var x = 0; x < Math.floor(Math.random() * 5); x++) {
            room.objects.push({
                "type": chooseRandomElement(objectTypes),
                "x": Math.random() * 100,
                "y": Math.random() * 100
            });
        }

        room.links = {
            "top": Math.floor(Math.random() * roomsCount),
            "bottom": Math.floor(Math.random() * roomsCount),
            "left": Math.floor(Math.random() * roomsCount),
            "right": Math.floor(Math.random() * roomsCount)
        };

        rooms.push(room);
    }

    return rooms;
}