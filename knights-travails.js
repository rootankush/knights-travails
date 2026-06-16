function knightMoves(start, end) {
	const queue = [];
	const visited = new Set();
	visited.add(start.toString());
	queue.push({
		position: start,
		path: [start],
	});

	while (queue.length !== 0) {
		const current = queue.shift();
		if (current.position[0] === end[0] && current.position[1] === end[1]) {
			console.log(
				`=> You made it in ${current.path.length - 1} moves! Here's your path: `,
			);
			for (const curr of current.path) {
				console.log(curr);
			}

			return current.path;
		}
		const neighbors = getValidMoves(current.position);
		for (const neighbor of neighbors) {
			const neighborStr = neighbor.toString();
			if (!visited.has(neighborStr)) {
				visited.add(neighborStr);
				queue.push({
					position: neighbor,
					path: [...current.path, neighbor],
				});
			}
		}
	}
}

function getValidMoves([x, y]) {
	const validMoves = [];
	const definedMoves = [
		[1, 2],
		[2, 1],
		[2, -1],
		[1, -2],
		[-1, -2],
		[-2, -1],
		[-2, 1],
		[-1, 2],
	];

	for (const [dx, dy] of definedMoves) {
		const newX = x + dx;
		const newY = y + dy;
		if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
			validMoves.push([newX, newY]);
		}
	}

	return validMoves;
}

knightMoves([0, 0], [1, 2]); // Should be 1 move
knightMoves([0, 0], [3, 3]); // Should be 2 moves
knightMoves([3, 3], [4, 3]); // Should be 3 moves
