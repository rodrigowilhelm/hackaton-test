"use client"

import { Box, Group, Text, Code } from "@mantine/core";
import { useMouse } from "@mantine/hooks";

export function MouseTrack() {
    const {x , y} = useMouse();

    let r, g, b;
    r = (x / 500) * 255;
    r = r.toFixed(0);
    g = (y / 500) * 255;
    g = g.toFixed(0);
    b = 100;

    return (
        <Group pt="50" justify="center">
            <Box w={500} h={500} bg={`rgba(${r}, ${g}, ${b}, 1)`}/>
            <Text ta="center">
                RGB: <Code>{`R: ${r}, G: ${g}, ${b}`}</Code>
            </Text>
        </Group>
    );
};
