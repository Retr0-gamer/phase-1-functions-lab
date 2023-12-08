function distanceFromHqInBlocks(value) {
    if (value >= 42) {
        return value - 42
    } else if (value <= 42) {
        return 42 - value
    };
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    } else
        return (destination - start) * 264

}

function calculatesFarePrice(start, destination) {
    if (distanceFromHqInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) <= 2500 && distanceFromHqInFeet(start, destination) > 2000) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }
}