/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
//The following objects record the season statistics for players on a basketball team.
const player1 = {
    jersey: 8,
    stats: [
        { game: 1, points: 6 },
        { game: 2, points: 7 },
    ],
};
const player2 = {
    jersey: 12,
    stats: [
        { game: 1, points: 16 },
        { game: 2, points: 14 },
    ],
};
export const player3 = {
    jersey: 6,
    stats: [
        { game: 1, points: 10 },
        { game: 2, points: 6 },
    ],
};
export const teamStats = [player1, player2, player3];
/**
*
* @param {Object} Object holding players stasts
* @returns {number} returns the total number of the points of the player
*
*/
export function findTotalPlayerPoints(player) {
    const totalPoints = player.stats.reduce((total, current) => {
        total += current.points;
        return total;
    }, 0);
    return totalPoints;
}
/**
*
* @param {Object} Object holding players stasts
* @returns {number} returns the total number of the points of the player
*
*/
export function findTotalPointsByJersey(teamStats, jersey) {
    const totalPoints = teamStats.reduce((total, current) => {
        if (current.jersey === jersey) {
            for (const stat of current.stats) {
                total += stat.points;
            }
        }
        return total;
    }, 0);
    return totalPoints;
}
export function findTotalScores(teamStats) {
    const totalScore = teamStats.map(player => {
        let totalPoint = 0;
        for (const stat of player.stats) {
            totalPoint += stat.points;
        }
        let jerseyPoint = { jersey: player.jersey, total: totalPoint };
        return jerseyPoint;
    });
    return totalScore;
}
