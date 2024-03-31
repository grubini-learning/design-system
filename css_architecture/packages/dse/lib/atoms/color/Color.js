import { jsx } from 'react/jsx-runtime';

const Color = ({ hexCode, width = "lg", height = "lg" }) => {
    const classes = `dse-width-${width} dse-height-${height}`;
    return (jsx("div", { className: classes, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
