const functionsData = [
    {
        "id": "linear",
        "description": "Lineare Funktionen",
        "color": "blue",
        "functions": [
            {"level": "basic", "equation": "x", "points": [{"x": 0}, {"x": 1}]},
            {"level": "medium", "equation": "2x", "points": [{"x": 0}, {"x": 3}]},
            {"level": "medium", "equation": "-x+5", "points": [{"x": 0}, {"x": 2}]},
            {"level": "medium", "equation": "2.5", "points": [{"x": -3.5, "labeled": true}, {"x": 1, "labeled": true}]},
            {"level": "medium", "equation": "3x-2", "points": [{"x": -1}, {"x": 2}]},
            {"level": "medium", "equation": "-2x+4", "points": [{"x": 0}, {"x": 3}]},
            {"level": "medium", "equation": "0.5x-1", "points": [{"x": 0}, {"x": 2}]},
            {"level": "medium", "equation": "5/3x-2", "points": [{"x": 0}, {"x": 3}]},
            {
                "level": "high",
                "equation": "3/5x-1/3",
                "points": [{"x": -5, "labeled": true}, {"x": 5, "labeled": true}]
            },
            {"level": "medium", "equation": "2/5x", "points": [{"x": 0}, {"x": 1, "labeled": true}]},
            {"level": "medium", "equation": "-2", "points": [{"x": 0}, {"x": 3}]},
            {"level": "high", "equation": "-(5/2)x-3/2", "points": [{"x": 1, "labeled": true}, {"x": -3}]},
            {"level": "medium", "equation": "3", "points": [{"x": -2}, {"x": 2}]},
            {"level": "high", "equation": "7/4x+1", "points": [{"x": 0}, {"x": 3, "labeled": true}]},
            {
                "level": "high",
                "equation": "(-1/3)x-0.5",
                "points": [{"x": -3, "labeled": true}, {"x": 4, "labeled": true}]
            },
            {"level": "medium", "equation": "-x+4", "points": [{"x": 0}, {"x": 3}]},
            {"level": "high", "equation": "-x+1", "points": [{"x": -2}, {"x": 2}]},
            {"level": "high", "equation": "7x-5", "points": [{"x": 0.5, "labeled": true}, {"x": 1}]},
            {"level": "high", "equation": "-6x+8", "points": [{"x": 2}, {"x": 0.5, "labeled": true}]},
            {"level": "high", "equation": "-3x", "points": [{"x": -1}, {"x": 1}]}
        ]
    },
    {
        "id": "quadratic",
        "description": "Quadratische Funktionen",
        "color": "mediumblue",
        "functions": [
            {"level": "basic", "equation": "x^2", "points": [{"x": 0}, {"x": 1}, {"x": 2}]},
            {"level": "medium", "equation": "(x+1)^2", "points": [{"x": -1}, {"x": 1}]},
            {
                "level": "medium",
                "equation": "5(x-5)^2-3",
                "points": [{"x": 5}, {"x": 6}],
                "boundingbox": [-2, 7, 12, -7]
            },
            {"level": "medium", "equation": "-0.5x^2", "points": [{"x": 0}, {"x": 2}]},
            {"level": "medium", "equation": "(x-2)^2", "points": [{"x": 0}, {"x": 2}]},
            {"level": "high", "equation": "x^2 + 4x", "points": [{"x": -2}, {"x": 0}]},
            {"level": "high", "equation": "-x^2 + 6x", "points": [{"x": 3}, {"x": 0}], "boundingbox": [-4, 10, 10, -4]},
            {"level": "high", "equation": "x^2 - 5x + 6", "points": [{"x": 0}, {"x": 2}, {"x": 3}]},
            {"level": "high", "equation": "2x^2 + 3x - 1", "points": [{"x": -0.75, "labeled": true}, {"x": 1}]},
            {"level": "high", "equation": "x^2 + x", "points": [{"x": -0.5, "labeled": true}, {"x": 2}]},
            {"level": "high", "equation": "-3x^2 + 2", "points": [{"x": 0}, {"x": 1}]},
            {"level": "medium", "equation": "-(x-3)^2+4", "points": [{"x": 3}, {"x": 0}]},
            {"level": "medium", "equation": "0.5(x+2)^2-1", "points": [{"x": -4}, {"x": -2}]},
            {"level": "medium", "equation": "(x-1)^2+2", "points": [{"x": 1}, {"x": 2}]},
            {"level": "medium", "equation": "-2(x+1)^2+3", "points": [{"x": -1}, {"x": 1}]},
            {"level": "medium", "equation": "-x^2", "points": [{"x": 0}, {"x": 1}]},
            {"level": "medium", "equation": "-(3/2)x^2", "points": [{"x": 0}, {"x": 2}]},
            {"level": "medium", "equation": "(4/5)x^2", "points": [{"x": 0}, {"x": 1, "labeled": true}]},
            {"level": "medium", "equation": "3x^2 - 5", "points": [{"x": 0}, {"x": 2}]},
            {"level": "high", "equation": "-x^2 - x + 1", "points": [{"x": -0.5, "labeled": true}, {"x": 1}]}
        ]
    },
    {
        "id": "power",
        "description": "Potenz- und Wurzelfunktionen",
        "color": "darkblue",
        "functions": [
            {
                "level": "basic", "equation": "x^3",
                "points": [{"x": 0}, {"x": 1}]
            },
            {
                "level": "basic", "equation": "1/x",
                "points": [{"x": 1}, {"x": -1}, {"x": 2, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y"]
            },
            {
                "level": "basic", "equation": "1/(x^2)",
                "points": [{"x": 1}, {"x": -1}, {"x": 2, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y"]
            },
            {"level": "basic", "equation": "x^4", "points": [{"x": 0}, {"x": 1}, {"x": 2, "labeled": true}]},
            {
                "level": "basic",
                "equation": "sqrt(x)",
                "points": [{"x": 0}, {"x": 1}, {"x": 4}],
                "domain": "[0, \\infty )"
            },
            {
                "level": "medium",
                "equation": "sqrt(x+2)-1",
                "points": [{"x": -2}, {"x": -1}, {"x": 2}],
                "domain": "[-2, \\infty )"
            },
            {
                "level": "medium", "equation": "1/(x-1)",
                "points": [{"x": 0}, {"x": 2}, {"x": 3, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{1\\}",
                "asymptotes": ["x-1", "y"]
            },
            {"level": "medium", "equation": "x^3 - 1", "points": [{"x": 0}, {"x": 1}, {"x": -1.5, "labeled": true}]},
            {
                "level": "medium", "equation": "2/x",
                "points": [{"x": 1}, {"x": 2}, {"x": -0.5}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y"]
            },
            {
                "level": "medium", "equation": "-(1/x)",
                "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y"]
            },
            {
                "level": "medium", "equation": "-(1/(x^2))",
                "points": [{"x": 1}, {"x": 1}, {"x": -2, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y"]
            },
            {
                "level": "medium", "equation": "1/x - 2",
                "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y+2"]
            },
            {
                "level": "medium", "equation": "-1/(x - 2)",
                "points": [{"x": 1}, {"x": 3}, {"x": -1, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{2\\}",
                "asymptotes": ["x-2", "y"]
            },
            {
                "level": "high", "equation": "1/(x + 3)^2",
                "points": [{"x": -2}, {"x": -4}, {"x": 2, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{-3\\}",
                "asymptotes": ["x+3", "y"]
            },
            {"level": "medium", "equation": "2x^3", "points": [{"x": 0}, {"x": 1}]},
            {
                "level": "medium", "equation": "-(1/(x^2)) + 3",
                "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y-3"]
            },
            {
                "level": "medium",
                "equation": "2sqrt(x)",
                "points": [{"x": 0}, {"x": 1}, {"x": 4}],
                "domain": "[0, \\infty )"
            },
            {
                "level": "medium",
                "equation": "sqrt(x - 3)",
                "points": [{"x": 3}, {"x": 4}, {"x": 7}],
                "domain": "[3, \\infty )"
            },
            {
                "level": "high",
                "equation": "-2sqrt(x + 2) + 5",
                "points": [{"x": -2}, {"x": -1}, {"x": 2}],
                "domain": "[-2, \\infty )"
            },
            {
                "level": "high", "equation": "4/x^2 - 2",
                "points": [{"x": -2}, {"x": -1}, {"x": 1}, {"x": 2}],
                "domain": "\\mathbb{R} \\setminus \\{0\\}",
                "asymptotes": ["x", "y+2"]
            }
        ]
    },
    {
        "id": "exponential",
        "description": "Exponentialfunktionen",
        "color": "green",
        "functions": [
            {"level": "basic", "equation": "e^x", "points": [{"x": 0}, {"x": 1, "labeled": true}], "asymptotes": ["y"]},
            {"level": "basic", "equation": "2^x", "points": [{"x": 0}, {"x": 2}], "asymptotes": ["y"]},
            {
                "level": "medium",
                "equation": "3^x",
                "points": [{"x": 0}, {"x": -1, "labeled": true}],
                "asymptotes": ["y"]
            },
            {
                "level": "basic",
                "equation": "e^-x",
                "points": [{"x": 0}, {"x": -1, "labeled": true}],
                "asymptotes": ["y"]
            },
            {
                "level": "basic",
                "equation": "2^-x",
                "points": [{"x": 0}, {"x": 1, "labeled": true}],
                "asymptotes": ["y"]
            },
            {"level": "medium", "equation": "3^x - 3", "points": [{"x": 0}, {"x": 1}, {"x": 2}], "asymptotes": ["y+3"]},
            {
                "level": "high",
                "equation": "2(sqrt(2))^-x - 2",
                "points": [{"x": -2}, {"x": 0}, {"x": 2}],
                "asymptotes": ["y+2"]
            },
            {"level": "high", "equation": "4*4^(x/3)", "points": [{"x": -3}, {"x": 0}], "asymptotes": ["y"]},
            {"level": "high", "equation": "3^(x-4) - 2", "points": [{"x": 4}, {"x": 5}], "asymptotes": ["y+2"]},
            {"level": "high", "equation": "2^(x-2)", "points": [{"x": 2}, {"x": 4}], "asymptotes": ["y"]},
            {
                "level": "high", "equation": "(1/3)^(x+2) - 1",
                "points": [{"x": -4}, {"x": -2}],
                boundingbox: [-5, 11, 11, -5],
                "asymptotes": ["y+1"]
            },
            {
                "level": "medium",
                "equation": "10^x",
                "points": [{"x": 0}, {"x": 1}],
                boundingbox: [-15, 15, 15, -15],
                "asymptotes": ["y"]
            },
            {
                "level": "high",
                "equation": "e^(2x)",
                "points": [{"x": 0}, {"x": -1, "labeled": true}],
                "asymptotes": ["y"]
            },
            {"level": "medium", "equation": "2^(0.5x)", "points": [{"x": 0}, {"x": 4}], "asymptotes": ["y"]},
            {
                "level": "medium",
                "equation": "(3/2)^x",
                "points": [{"x": 0}, {"x": 1, "labeled": true}],
                "asymptotes": ["y"]
            },
            {
                "level": "medium", "equation": "10^(-x)",
                "points": [{"x": 0}, {"x": -1}],
                boundingbox: [-15, 15, 15, -15],
                "asymptotes": ["y"]
            },
            {
                "level": "medium", "equation": "0.1^x",
                "points": [{"x": 0}, {"x": -1}],
                boundingbox: [-15, 15, 15, -15],
                "asymptotes": ["y"]
            },
            {"level": "high", "equation": "3^(x+1)", "points": [{"x": 0}, {"x": -1}], "asymptotes": ["y"]},
            {"level": "medium", "equation": "5^(-x) + 1", "points": [{"x": 0}, {"x": -1}], "asymptotes": ["y-1"]}
        ]
    },
    {
        "id": "logarithmic",
        "description": "Logarithmusfunktionen",
        "color": "darkgreen",
        "functions": [
            {
                "level": "basic", "equation": "log(x)",
                "points": [{"x": 1}, {"x": "e", "labeled": true}],
                "domain": "(0, \\infty )",
                "asymptotes": ["x"]
            },
            {
                "level": "basic",
                "equation": "log(x, 2)",
                "points": [{"x": 1}, {"x": 2}],
                "domain": "(0, \\infty )",
                "asymptotes": ["x"]
            },
            {
                "level": "basic", "equation": "log(x, 0.5)",
                "points": [{"x": 1}, {"x": 0.5, "labeled": true}],
                "domain": "(0, \\infty )",
                "asymptotes": ["x"]
            },
            {
                "level": "high", "equation": "-log(-x)",
                "points": [{"x": -1}, {"x": "-e", "labeled": true}],
                "domain": "(-\\infty, 0)",
                "asymptotes": ["x"]
            },
            {
                "level": "medium",
                "equation": "-log(x, 2)",
                "points": [{"x": 1}, {"x": 2}],
                "domain": "(0, \\infty)",
                "asymptotes": ["x"]
            },
            {
                "level": "medium", "equation": "log(x) - 1",
                "points": [{"x": 1}, {"x": "e", "labeled": true, "xLabel": "e"}],
                "domain": "(0, \\infty )",
                "asymptotes": ["x"]
            },
            {
                "level": "medium", "equation": "log(x, 1/10)",
                "points": [{"x": 1}, {"x": 10}],
                "boundingbox": [-15, 15, 15, -15],
                "domain": "(0, \\infty )",
                "asymptotes": ["x"]
            },
            {
                "level": "medium",
                "equation": "log(x, 3)",
                "points": [{"x": 1}, {"x": 3}],
                "domain": "(0, \\infty )",
                "asymptotes": ["x"]
            },
            {
                "level": "medium", "equation": "log(x, 10)",
                "points": [{"x": 1}, {"x": 10}],
                "boundingbox": [-15, 15, 15, -15],
                "domain": "(0, \\infty )",
                "asymptotes": ["x"]
            },
            {
                "level": "high", "equation": "-log(x + 2, 3)",
                "points": [{"x": -1}, {"x": 1}],
                "domain": "(-2, \\infty )",
                "asymptotes": ["x+2"]
            },
        ]
    },
    {
        "id": "trigonometric",
        "description": "Trigonometrische Funktionen",
        "color": "darkgoldenrod",
        "functions": [
            {
                "level": "basic",
                "equation": "sin(x)",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": 1}]
            },
            {
                "level": "basic",
                "equation": "cos(x)",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": 0}]
            },
            {
                "level": "basic",
                "equation": "tan(x)",
                "points": [{"x": 0}, {"x": "pi/4", "labeled": true, "xLabel": "π/4", "yLabel": 1}]
            },
            {
                "level": "medium", "equation": "cos(x) - 2",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": -2}]
            },
            {
                "level": "medium", "equation": "3cos(x)",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": 0}]
            },
            {
                "level": "medium", "equation": "-sin(x)",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": -1}]
            },
            {
                "level": "medium",
                "equation": "-cos(x)",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": 0}]
            },
            {
                "level": "medium", "equation": "cos(x + 1)",
                "points": [{"x": -1}, {"x": "pi/2 - 1", "labeled": true, "xLabel": "π/2 - 1", "yLabel": 0}]
            },
            {
                "level": "high", "equation": "0.5sin(x - pi/4)",
                "points": [{"x": "pi/4", "labeled": true, "xLabel": "π/4", "yLabel": 0}, {
                    "x": "3pi/4",
                    "labeled": true,
                    "xLabel": "3π/4",
                    "yLabel": 0.5
                }]
            },
            {
                "level": "medium", "equation": "tan(0.5x)",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": 1}]
            },
            {
                "level": "medium",
                "equation": "sin(2x)",
                "points": [{"x": 0}, {"x": "pi/4", "labeled": true, "xLabel": "π/4", "yLabel": 1}]
            },
            {
                "level": "medium",
                "equation": "sin(0.5x)",
                "points": [{"x": 0}, {"x": "pi", "labeled": true, "xLabel": "π", "yLabel": 1}]
            },
            {
                "level": "medium",
                "equation": "cos(4x)",
                "points": [{"x": 0}, {"x": "pi/2", "labeled": true, "xLabel": "π/2", "yLabel": 1}]
            },
            {
                "level": "high", "equation": "2sin(3x)",
                "points": [{"x": 0}, {"x": "2pi/3", "labeled": true, "xLabel": "2π/3", "yLabel": 0}]
            },
            {
                "level": "high", "equation": "2sin(3/2(x + pi/6))",
                "points": [{"x": "-pi/6", "labeled": true, "xLabel": "-π/6", "yLabel": 0}, {
                    "x": "pi/6",
                    "labeled": true,
                    "xLabel": "π/6",
                    "yLabel": 2
                }]
            },
            {
                "level": "high",
                "equation": "-2 cos(pi x)",
                "points": [{"x": 0}, {"x": 2}]
            },
            {
                "level": "high", "equation": "sin(2x) + 3",
                "points": [{"x": 0}, {"x": "2pi", "labeled": true, "xLabel": "2π", "yLabel": 3}],
                boundingbox: [-8, 8, 8, -8]
            },
            {
                "level": "high", "equation": "-10sin(((2pi)/24)x) + 5",
                "points": [{"x": 0, "labeled": true, "yLabel": 5}, {"x": 12, "labeled": true, "yLabel": 5}, {
                    "x": 24,
                    "labeled": true,
                    "yLabel": 5
                }],
                boundingbox: [-3, 20, 27, -10]
            },
            {
                "level": "high", "equation": "3sin(((2pi)/24)(x-8)) -2",
                "points": [{"x": 8, "labeled": true, "yLabel": -2}, {"x": 32, "labeled": true, "yLabel": 5}],
                "boundingbox": [-3, 20, 37, -20]
            },
            {
                "level": "high", "equation": "3sin(2x + pi/4) - 1",
                "points": [{"x": "-pi/8", "labeled": true, "xLabel": "-π/8", "yLabel": -1}, {
                    "x": "pi/8",
                    "labeled": true,
                    "xLabel": "π/8",
                    "yLabel": 2
                }]
            },
        ]
    },
]

