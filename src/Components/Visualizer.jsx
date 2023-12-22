import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as dat from 'dat.gui';
import p5 from 'p5';

const Visualizer = () => {
    const params = {
        pixelSize: 10,
        colour: [0, 0, 0],
        background: [255, 255, 255],
        characters: ' .:-=+*#%@',
        textSize: 13,
        textStyle: 'NORMAL',
    };

    let capture;
    let capturing = false;
    let canvasWidth;
    let canvasHeight;

    const canvasRef = useRef(null);

    useEffect(() => {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        const sketch = new p5(p5Sketch);
        return () => {
            sketch.remove();
        };
    }, []);

    const p5Sketch = (p) => {
        p.setup = () => {
            const gui = new dat.GUI();

            gui.add(params, 'pixelSize', 3, 100, 1);
            gui.add(params, 'textSize', 1, 50, 1);
            gui.add(params, 'characters');
            gui.add(params, 'textStyle', ['NORMAL', 'ITALIC', 'BOLD']);
            gui.addColor(params, 'colour');
            gui.addColor(params, 'background');

            capture = p.createCapture({
                video: {
                    mandatory: {
                        minWidth: 1280,
                        minHeight: 720,
                    },
                    optional: [{ maxFrameRate: 10 }],
                },
                audio: false,
            });
        capturing = true;
        capture.size(canvasWidth, canvasHeight);
        capture.hide();

        p.createCanvas(canvasWidth, canvasHeight);
    };

    p.draw = () => {
        p.background(params.background);

        p.textSize(params.textSize);
        p.fill(params.colour);

        if (params.textStyle === 'NORMAL') p.textStyle(p.NORMAL);
        else if (params.textStyle === 'ITALIC') p.textStyle(p.ITALIC);
        else p.textStyle(p.BOLD);

        const characters = params.characters.split('');

        if (capturing) {
            capture.loadPixels();

            if (capture.pixels) {
                for (let y = 0; y < capture.height; y += params.pixelSize) {
                    for (let x = 0; x < capture.width; x += params.pixelSize) {
                        const index = (x + y * capture.width) * 4;

                        const r = capture.pixels[index];
                        const g = capture.pixels[index + 1];
                        const b = capture.pixels[index + 2];
                        const a = capture.pixels[index + 3];

                        const bright = Math.round((r + g + b) / 3);

                        const letter = characters[Math.round(p.map(bright, 0, 255, characters.length - 1, 0))];

                        p.text(letter, x, y);
                    }
                }
            }
        }
    };

    p.windowResized = () => {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        p.resizeCanvas(canvasWidth, canvasHeight);

        capture = p.createCapture({
            video: {
                mandatory: {
                    minWidth: 1280,
                    minHeight: 720,
                },
            optional: [{ maxFrameRate: 10 }],
            },
            audio: false,
        });
        capturing = true;
        capture.size(canvasWidth, canvasHeight);
        capture.hide();
    };
};

    return (
        
            <StyledBody ref={canvasRef}>
        
            </StyledBody>
        
    );
};

export default Visualizer;

const StyledBody = styled.body `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`