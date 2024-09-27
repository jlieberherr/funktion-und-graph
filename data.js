const functionsData = {
    linear: [
        {equation: "x", points: [[-2, -2], [0, 0], [2, 2]], boundingbox: [-3, 3, 3, -3]},
        {equation: "2x+3", points: [[-2, -1], [0, 3], [2, 7]], boundingbox: [-5, 10, 5, -5]},
        {equation: "-x+5", points: [[-2, 7], [0, 5], [2, 3]], boundingbox: [-5, 10, 5, -5]},
        {equation: "3x-2", points: [[-2, -8], [0, -2], [2, 4]], boundingbox: [-5, 10, 5, -10]},
        {equation: "-2x+4", points: [[-2, 8], [0, 4], [2, 0]], boundingbox: [-5, 10, 10, -5]},
        {equation: "0.5x-1", points: [[-2, -2], [0, -1], [2, 0]], boundingbox: [-5, 3, 5, -3]},
        {equation: "4x+10", points: [[-2, 2], [0, 10], [2, 18]], boundingbox: [-5, 20, 5, 0]},
        {equation: "-3x+1", points: [[-2, 7], [0, 1], [2, -5]], boundingbox: [-5, 10, 5, -10]},
        {equation: "5x-7", points: [[-2, -17], [0, -7], [2, 3]], boundingbox: [-5, 5, 5, -20]},
        {equation: "-0.5x+6", points: [[-2, 7], [0, 6], [2, 5]], boundingbox: [-5, 10, 5, 0]},
        {equation: "x+2", points: [[-2, 0], [0, 2], [2, 4]], boundingbox: [-5, 5, 5, -5]},
        {equation: "-x-2", points: [[-2, 0], [0, -2], [2, -4]], boundingbox: [-5, 5, 5, -5]},
        {equation: "3x+4", points: [[-2, -2], [0, 4], [2, 10]], boundingbox: [-5, 15, 5, -5]},
        {equation: "x-3", points: [[-2, -5], [0, -3], [2, -1]], boundingbox: [-5, 5, 5, -5]},
        {equation: "-x+2", points: [[-2, 4], [0, 2], [2, 0]], boundingbox: [-5, 5, 5, -5]},
        {equation: "7x-5", points: [[-2, -19], [0, -5], [2, 9]], boundingbox: [-5, 10, 5, -20]},
        {equation: "-6x+8", points: [[-2, 20], [0, 8], [2, -4]], boundingbox: [-5, 25, 5, -10]},
        {equation: "x+0", points: [[-2, -2], [0, 0], [2, 2]], boundingbox: [-5, 5, 5, -5]},
        {equation: "2x", points: [[-2, -4], [0, 0], [2, 4]], boundingbox: [-5, 5, 5, -5]},
        {equation: "-3x", points: [[-2, 6], [0, 0], [2, -6]], boundingbox: [-5, 10, 5, -10]}
    ],
    quadratic: [
        {equation: "x^2", points: [[-2, 4], [0, 0], [2, 4]], boundingbox: [-5, 5, 5, -5]},
        {equation: "x^2 + 2x + 1", points: [[-2, 1], [0, 1], [2, 9]], boundingbox: [-5, 10, 5, -5]},
        {equation: "5(x-5)^2-3", points: [[3, 17], [5, -3], [7, 17]], boundingbox: [-5, 20, 10, -10]},
        {equation: "-x^2 + 3x - 2", points: [[-2, -12], [0, -2], [2, -2]], boundingbox: [-5, 5, 5, -15]},
        {equation: "x^2 - 4x + 4", points: [[-2, 16], [0, 4], [2, 0]], boundingbox: [-5, 20, 5, -5]},
        {equation: "x^2 + 4x", points: [[-2, 0], [0, 0], [2, 12]], boundingbox: [-5, 15, 5, -5]},
        {equation: "-x^2 + 6x", points: [[-2, -16], [0, 0], [2, 8]], boundingbox: [-5, 10, 5, -20]},
        {equation: "x^2 - 5x + 6", points: [[-2, 20], [0, 6], [2, 0]], boundingbox: [-5, 25, 5, -5]},
        {equation: "2x^2 + 3x - 1", points: [[-2, 7], [0, -1], [2, 13]], boundingbox: [-5, 15, 5, -5]},
        {equation: "x^2 + x", points: [[-2, 2], [0, 0], [2, 6]], boundingbox: [-5, 10, 5, -5]},
        {equation: "3x^2 - x + 2", points: [[-2, 16], [0, 2], [2, 12]], boundingbox: [-5, 20, 5, -5]},
        {equation: "-x^2 + 7x - 5", points: [[-2, -27], [0, -5], [2, -1]], boundingbox: [-5, 10, 10, -30]},
        {equation: "0.5x^2 + 2x + 1", points: [[-2, 1], [0, 1], [2, 9]], boundingbox: [-5, 10, 5, -5]},
        {equation: "x^2 - 2x + 3", points: [[-2, 7], [0, 3], [2, 7]], boundingbox: [-5, 10, 5, 0]},
        {equation: "-2x^2 + 5x - 4", points: [[-2, -10], [0, -4], [2, 2]], boundingbox: [-5, 5, 5, -15]},
        {equation: "x^2 - x - 2", points: [[-2, 4], [0, -2], [2, 4]], boundingbox: [-5, 5, 5, -5]},
        {equation: "4x^2 - 6x + 9", points: [[-2, 37], [0, 9], [2, 1]], boundingbox: [-5, 40, 5, 0]},
        {equation: "-x^2 + 4x", points: [[-2, -12], [0, 0], [2, 4]], boundingbox: [-5, 5, 5, -15]},
        {equation: "3x^2 - 5", points: [[-2, 7], [0, -5], [2, 7]], boundingbox: [-5, 10, 5, -10]},
        {equation: "x^2 - x + 1", points: [[-2, 7], [0, 1], [2, 3]], boundingbox: [-5, 10, 5, 0]}
    ],
    exponential: [
        {equation: "e^x", points: [[-2, 0.1353], [0, 1]], boundingbox: [-3, 5, 3, -1]},
        {equation: "2^x", points: [[-2, 0.25], [0, 1], [2, 4]], boundingbox: [-3, 5, 3, 0]},
        {equation: "3^x", points: [[-2, 0.1111], [0, 1], [2, 9]], boundingbox: [-3, 10, 3, 0]},
        {equation: "e^-x", points: [[-2, 7.3891], [0, 1], [2, 0.1353]], boundingbox: [-3, 10, 3, 0]},
        {equation: "2^-x", points: [[-2, 4], [0, 1], [2, 0.25]], boundingbox: [-3, 5, 3, 0]},
        {equation: "3^-x", points: [[-2, 9], [0, 1], [2, 0.1111]], boundingbox: [-3, 10, 3, 0]},
        {equation: "0.5^x", points: [[-2, 4], [0, 1], [2, 0.25]], boundingbox: [-3, 5, 3, 0]},
        {equation: "exp(x+1)", points: [[-2, 0.3679], [0, 2.7183], [2, 20.0855]], boundingbox: [-3, 25, 3, 0]},
        {equation: "e^{x-1}", points: [[-2, 0.0498], [0, 0.3679], [2, 2.7183]], boundingbox: [-3, 5, 3, 0]},
        {equation: "2^{x+2}", points: [[-2, 1], [0, 4], [2, 16]], boundingbox: [-3, 20, 3, 0]},
        {equation: "2^{x-2}", points: [[-2, 0.0625], [0, 0.25], [2, 1]], boundingbox: [-3, 5, 3, 0]},
        {equation: "5^x", points: [[-2, 0.04], [0, 1], [2, 25]], boundingbox: [-3, 30, 3, 0]},
        {equation: "10^x", points: [[-2, 0.01], [0, 1], [2, 100]], boundingbox: [-3, 120, 3, 0]},
        {equation: "e^{2x}", points: [[-2, 0.0183], [0, 1], [2, 54.5982]], boundingbox: [-3, 60, 3, 0]},
        {equation: "2^{0.5x}", points: [[-2, 0.7071], [0, 1], [2, 1.4142]], boundingbox: [-3, 2, 3, 0]},
        {equation: "e^{0.5x}", points: [[-2, 0.3679], [0, 1], [2, 1.6487]], boundingbox: [-3, 3, 3, 0]},
        {equation: "10^{-x}", points: [[-2, 100], [0, 1], [2, 0.01]], boundingbox: [-3, 120, 3, 0]},
        {equation: "0.1^x", points: [[-2, 100], [0, 1], [2, 0.01]], boundingbox: [-3, 120, 3, 0]},
        {equation: "3^{x+1}", points: [[-2, 0.3333], [0, 3], [2, 27]], boundingbox: [-3, 30, 3, 0]},
        {equation: "5^{-x}", points: [[-2, 25], [0, 1], [2, 0.04]], boundingbox: [-3, 30, 3, 0]}
    ]
};
