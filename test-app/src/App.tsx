import { useState } from "react";
import { createScreenScaler } from "react-screen-scaler";

import { useDomRect } from "powerhooks/tools/useDomRect";



/*
console.log({ "window.devicePixelRatio": window.devicePixelRatio });

window.addEventListener("resize", () => {

    console.log({ "window.devicePixelRatio": window.devicePixelRatio });

});
*/

/*
const { ScreenScaler } = createScreenScaler({
    "targetWindowInnerWidth": 1920
});
*/

const { ScreenScaler } = createScreenScaler(
    ({ zoomLevel }) => (console.log({ zoomLevel }), { "targetWindowInnerWidth": 1920 * (1 - 0.1 * zoomLevel) })
);

/*
const ScreenScaler = (props: { children: React.ReactNode }) => {

    useState(() => {
        document.body.style.margin = "0";
    });

    return (<>{props.children}</>);
};
*/

export function App() {

    const { ref, domRect: { width } } = useDomRect();

    console.log("========>", width);

    return (
        <ScreenScaler>
            <h1 style={{ "border": "1px solid blue" }} ref={ref}>Hello World</h1>
        </ScreenScaler>
    );

}

/*
setInterval(
    () => {

        console.log({
            "window.innerWidth": window.innerWidth,
            "window.innerHeight": window.innerHeight,
        });

    },
    5000
);
*/