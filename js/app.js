export default function showHealth(stats) {
    let indicator;
    if (stats.health > 50) {
        indicator = "healthy";
    } else if (stats.health <= 50 && stats.health >= 15) {
        indicator = "wounded";
    } else if (stats.health < 15) {
        indicator = "critical";
    }

    return indicator
}