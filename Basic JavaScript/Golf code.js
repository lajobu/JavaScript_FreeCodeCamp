//Tener en cuenta que "=" no es lo mismo que "=="

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes == 2) {
        return "Eagle";
    } else if (strokes == 3) {
        return "Birdie";
    } else if (par == strokes) {
        return "Par";
    } else if (strokes - par == 1) {
        return "Bogey";
    } else if (strokes - par == 2) {
        return "Double Bogey";
    } else if (strokes - par >= 3) {
        return "Go Home!";
    }
}
golfScore(5, 4);