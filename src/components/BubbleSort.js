import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BubbleSort = ({ array }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove(); // Clear previous visualization

        const width = 500;
        const height = 200;
        const barWidth = width / array.length;

        svg.attr('width', width).attr('height', height);

        const update = (arr) => {
            const bars = svg.selectAll('rect').data(arr);

            bars.enter()
                .append('rect')
                .attr('x', (d, i) => i * barWidth)
                .attr('y', (d) => height - d * 20)
                .attr('width', barWidth - 2)
                .attr('height', (d) => d * 20)
                .attr('fill', 'blue');

            bars
                .attr('x', (d, i) => i * barWidth)
                .attr('y', (d) => height - d * 20)
                .attr('width', barWidth - 2)
                .attr('height', (d) => d * 20)
                .attr('fill', 'blue');

            bars.exit().remove();
        };

        const bubbleSort = async (arr) => {
            let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                        update([...arr]);
                        await new Promise((resolve) => setTimeout(resolve, 500)); // Pause for visualization
                    }
                }
            }
        };

        bubbleSort([...array]);
    }, [array]);

    return <svg ref={ref}></svg>;
};

export default BubbleSort;