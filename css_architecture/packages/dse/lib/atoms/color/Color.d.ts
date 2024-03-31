import Spacing from "../../foundation/Spacing";
interface ColorProps {
    hexCode: string;
    width?: keyof Spacing;
    height?: keyof Spacing;
}
declare const Color: ({ hexCode, width, height }: ColorProps) => import("react/jsx-runtime").JSX.Element;
export default Color;
