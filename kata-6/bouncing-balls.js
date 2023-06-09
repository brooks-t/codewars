// (6 kyu) Bouncing Balls: https://www.codewars.com/kata/5544c7a5cb454edb3c000047
// ============================================================================
// A child is playing with a ball on the nth floor of a tall building. The height
// of this floor, h, is known. He drops the ball out of the window. The ball bounces
// (for example), to two-thirds of its height (a bounce of 0.66). His mother looks
// out of a window 1.5 meters from the ground. How many times will the mother see
// the ball pass in front of her window (including when it's falling and bouncing?
// ============================================================================

const bouncingBall = (h, bounce, window) => {
	if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
		return -1;
	}

	let ballSeen = 1;
	let rebound = h * bounce;

	while (window < rebound) {
		ballSeen += 2;
		rebound *= bounce;
	}

	return ballSeen;
};

console.log(bouncingBall(3, 0.66, 1.5));
console.log(bouncingBall(3, 1, 1.5));
