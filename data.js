const functionsData = [
    {
        "id": "linear",
        "description": "Lineare Funktionen",
        "color": "blue",
        "functions": [
            {"equation": "x", "points": [{"x": 0}, {"x": -2}]},
            {"equation": "2x", "points": [{"x": -2}, {"x": 3}]},
            {"equation": "-x+5", "points": [{"x": 0}, {"x": 2}]},
            {"equation": "2.5", "points": [{"x": -3.5, "labeled": true}, {"x": 1, "labeled": true}]},
            {"equation": "3x-2", "points": [{"x": -1}, {"x": 2}]},
            {"equation": "-2x+4", "points": [{"x": 1}, {"x": 3}]},
            {"equation": "0.5x-1", "points": [{"x": -2}, {"x": 2}]},
            {"equation": "5/3x-2", "points": [{"x": 0}, {"x": 3}]},
            {"equation": "3/5x-2", "points": [{"x": -5}, {"x": 5}]},
            {"equation": "2/5x", "points": [{"x": 0}, {"x": 1, "labeled": true}]},
            {"equation": "0/5x-2", "points": [{"x": 0}, {"x": 3}]},
            {"equation": "-(5/2)x-3/2", "points": [{"x": 0, "labeled": true}, {"x": -3}]},
            {"equation": "-2", "points": [{"x": -2}, {"x": 2}]},
            {"equation": "7/4x+1", "points": [{"x": 0}, {"x": 3, "labeled": true}]},
            {"equation": "(-1/3)x-0.5", "points": [{"x": -3, "labeled": true}, {"x": 4, "labeled": true}]},
            {"equation": "-x+4", "points": [{"x": -1}, {"x": 3}]},
            {"equation": "-1x+2", "points": [{"x": -2}, {"x": 2}]},
            {"equation": "7x-5", "points": [{"x": 0.5, "labeled": true}, {"x": 1}]},
            {"equation": "-6x+8", "points": [{"x": 2}, {"x": 0.5, "labeled": true, "yLabel": 5}]},
            {"equation": "-3x", "points": [{"x": -1}, {"x": 1}]}
        ]
    },
    {
        "id": "quadratic",
        "description": "Quadratische Funktionen",
        "color": "mediumblue",
        "functions": [
            {"equation": "x^2", "points": [{"x": -2}, {"x": 0}]},
            {"equation": "x^2 + 2x + 1", "points": [{"x": -1}, {"x": 1}]},
            {"equation": "5(x-5)^2-3", "points": [{"x": 5}, {"x": 6}], "boundingbox": [-2, 7, 12, -7]},
            {"equation": "-0.5x^2", "points": [{"x": 0}, {"x": 2}]},
            {"equation": "x^2 - 4x + 4", "points": [{"x": 0}, {"x": 2}]},
            {"equation": "x^2 + 4x", "points": [{"x": -2}, {"x": 0}]},
            {"equation": "-x^2 + 6x", "points": [{"x": 3}, {"x": 0}], "boundingbox": [-4, 10, 10, -4]},
            {"equation": "x^2 - 5x + 6", "points": [{"x": 0}, {"x": 2}, {"x": 3}]},
            {"equation": "2x^2 + 3x - 1", "points": [{"x": -0.75, "labeled": true}, {"x": 1}]},
            {"equation": "x^2 + x", "points": [{"x": -0.5, "labeled": true}, {"x": 2}]},
            {"equation": "-3x^2 + 2", "points": [{"x": 0}, {"x": 1}]},
            {"equation": "-x^2 + 6x - 5", "points": [{"x": 3}, {"x": 0}]},
            {"equation": "0.5x^2 + 2x + 1", "points": [{"x": -4}, {"x": -2}]},
            {"equation": "x^2 - 2x + 3", "points": [{"x": 1}, {"x": 2}]},
            {"equation": "-2x^2 - 4x + 1", "points": [{"x": -1}, {"x": 1}]},
            {"equation": "-x^2", "points": [{"x": 0}, {"x": 1}]},
            {"equation": "-(3/2)x^2", "points": [{"x": 0}, {"x": 2}]},
            {"equation": "(4/5)x^2", "points": [{"x": 0}, {"x": 1}]},
            {"equation": "3x^2 - 5", "points": [{"x": 0}, {"x": 2}]},
            {"equation": "-x^2 - x + 1", "points": [{"x": -0.5, "labeled": true}, {"x": 1}]}
        ]
    },
    {
        "id": "power",
        "description": "Potenz- und Wurzelfunktionen",
        "color": "darkblue",
        "functions": [
            {"equation": "x^3", "points": [{"x": 0}, {"x": 1}, {"x": -1.5, "labeled": true}]},
            {"equation": "1/x", "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{0\\}"},
            {"equation": "1/(x^2)", "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{0\\}"},
            {"equation": "x^4", "points": [{"x": 0}, {"x": 1}, {"x": 0.5, "labeled": true}]},
            {"equation": "sqrt(x)", "points": [{"x": 0}, {"x": 1}, {"x": 4}], "domain": "[0, \\infty )"},
            {"equation": "sqrt(x+2)-1", "points": [{"x": -2}, {"x": 0}, {"x": 2}], "domain": "[-2, \\infty )"},
            {"equation": "1/(x-1)", "points": [{"x": 0}, {"x": 2}, {"x": 3, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{1\\}"},
            {"equation": "x^3 - 1", "points": [{"x": 0}, {"x": 1}, {"x": -1.5, "labeled": true}]},
            {"equation": "2/x", "points": [{"x": 1}, {"x": 2}, {"x": -0.5}], "domain": "\\mathbb{R} \\setminus \\{0\\}"},
            {"equation": "-(1/x)", "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{0\\}"},
            {"equation": "-(1/(x^2))", "points": [{"x": 1}, {"x": 1}, {"x": -2, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{0\\}"},
            {"equation": "1/x - 2", "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{0\\}"},
            {"equation": "-1/(x - 2)", "points": [{"x": 1}, {"x": 3}, {"x": -1, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{2\\}"},
            {"equation": "1/(x + 3)^2", "points": [{"x": -2}, {"x": -4}, {"x": 2, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{-3\\}"},
            {"equation": "2x^3", "points": [{"x": 0}, {"x": 1}, {"x": 0.5, "labeled": true}]},
            {"equation": "-(1/(x^2)) + 3", "points": [{"x": 1}, {"x": -1}, {"x": -2, "labeled": true}], "domain": "\\mathbb{R} \\setminus \\{0\\}"},
            {"equation": "2sqrt(x)", "points": [{"x": 0}, {"x": 1}, {"x": 4}], "domain": "[0, \\infty )"},
            {"equation": "sqrt(x - 3)", "points": [{"x": 3}, {"x": 4}, {"x": 7}], "domain": "[3, \\infty )"},
            {"equation": "-2sqrt(x + 2) + 5", "points": [{"x": -2}, {"x": -1}, {"x": 2}], "domain": "[-2, \\infty )"},
            {"equation": "4/x^2 - 2", "points": [{"x": -2}, {"x": -1}, {"x": 1}, {"x": 2}], "domain": "\\mathbb{R} \\setminus \\{0\\}"}
        ]
    },
    {
        "id": "exponential",
        "description": "Exponentialfunktionen",
        "color": "green",
        "functions": [
            {"equation": "e^x", "points": [{"x": 0}, {"x": 1, "labeled": true, "yLabel": "e"}]},
            {"equation": "2^x", "points": [{"x": 0}, {"x": 2}]},
            {"equation": "3^x", "points": [{"x": 0}, {"x": -1, "labeled": true}]},
            {"equation": "e^-x", "points": [{"x": 0}, {"x": -1, "labeled": true, "yLabel": "e"}]},
            {"equation": "2^-x", "points": [{"x": 0}, {"x": 1, "labeled": true}]},
            {"equation": "(1/2)^-x", "points": [{"x": 0}, {"x": 1}]},
            {"equation": "3^x - 3", "points": [{"x": 0}, {"x": 1}, {"x": 2}]},
            {"equation": "2(sqrt(2))^-x - 2", "points": [{"x": -2}, {"x": 0}, {"x": 2}]},
            {"equation": "4(4^(x/3))", "points": [{"x": -3}, {"x": 0}]},
            {"equation": "3^(x-4) - 2", "points": [{"x": 4}, {"x": 5}]},
            {"equation": "2^(x-2)", "points": [{"x": 2}, {"x": 4}]},
            {"equation": "(1/3)^(x+2) - 1", "points": [{"x": -4}, {"x": -2}], boundingbox: [-5, 11, 11, -5]},
            {"equation": "10^x", "points": [{"x": 0}, {"x": 1}], boundingbox: [-30, 30, 30, -30]},
            {"equation": "e^(2x)", "points": [{"x": 0}, {"x": -1, "labeled": true, "yLabel": "1/e^2"}]},
            {"equation": "2^(0.5x)", "points": [{"x": 0}, {"x": 4}]},
            {"equation": "(3/2)^x", "points": [{"x": 0}, {"x": 1, "labeled": true}]},
            {"equation": "10^(-x)", "points": [{"x": 0}, {"x": -1}], boundingbox: [-30, 30, 30, -30]},
            {"equation": "0.1^x", "points": [{"x": 0}, {"x": -1}], boundingbox: [-30, 30, 30, -30]},
            {"equation": "3^(x+1)", "points": [{"x": 0}, {"x": -1}]},
            {"equation": "5^(-x) + 1", "points": [{"x": 0}, {"x": -1}]}
        ]
    },
    {
        "id": "logarithmic",
        "description": "Logarithmusfunktionen",
        "color": "darkgreen",
        "functions": [
            {"equation": "log(x)"},
            {"equation": "log(x, 2)"},
            {"equation": "log(x, 0.5)"}
        ]
    },
    {
        "id": "trigonometric",
        "description": "Trigonometrische Funktionen",
        "color": "darkgoldenrod",
        "functions": [
            {"equation": "sin(x)"},
            {"equation": "cos(x)"},
            {"equation": "tan(x)"},
            {"equation": "0.5sin(x-2)"}
        ]
    },
]

