'use client';

import { useState, useCallback, useEffect } from 'react';
import { produce } from 'immer';

const numRows = 30
const numCols = 130;

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

// Define the colors palette
const colors = ['#FE0207', '#FE4900', '#FF7000', '#FEA401', '#FECE00'];

// Generate an empty grid (2D array of nulls)
const generateEmptyGrid = (): (string | null)[][] => {
    const rows: (string | null)[][] = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => null));
    }
    return rows;
};

const GameOfLife = () => {
    const [grid, setGrid] = useState<(string | null)[][]>(() => {
        return generateEmptyGrid();
    });

    const runSimulation = useCallback(() => {

        setGrid((g) => {
            return produce(g, (gridCopy) => {
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        let neighbors = 0;

                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if (
                                newI >= 0 &&
                                newI < numRows &&
                                newJ >= 0 &&
                                newJ < numCols
                            ) {
                                if (g[newI][newJ]) {
                                    neighbors += 1;
                                }
                            }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = null; // Cell dies
                        } else if (!g[i][j] && neighbors === 3) {
                            // Cell becomes alive with a random color
                            gridCopy[i][j] =
                                colors[Math.floor(Math.random() * colors.length)];
                        }
                    }
                }
            });
        });

        setTimeout(runSimulation, 100);
    }, []);

    // when the component mounts, run the simulation
    useEffect(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(
                Array.from(Array(numCols), () =>
                    Math.random() > 0.7
                        ? colors[
                        Math.floor(
                            Math.random() * colors.length
                        )
                        ]
                        : null
                )
            );
        }
        setGrid(rows);
        runSimulation();

    }, []);
    return (
        <>
            <div    
              
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 12px)`,
                }}
            >
                {grid.map((rows, i) =>
                    rows.map((col, j) => (
                        <div
                            key={`${i}-${j}`}
                            onClick={() => {
                                const newGrid = produce(grid, (gridCopy) => {
                                    gridCopy[i][j] = grid[i][j]
                                        ? null
                                        : colors[
                                        Math.floor(
                                            Math.random() *
                                            colors.length
                                        )
                                        ];
                                });
                                setGrid(newGrid);
                            }}
                            onMouseEnter={() => {
                                const newGrid = produce(grid, (gridCopy) => {
                                    gridCopy[i][j] =
                                        colors[
                                        Math.floor(
                                            Math.random() * colors.length
                                        )
                                        ];
                                });
                                setGrid(newGrid);
                            }}
                            style={{
                                width: 12,
                                height: 12,
                                backgroundColor: grid[i][j] || 'transparent',

                            }}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default GameOfLife;
