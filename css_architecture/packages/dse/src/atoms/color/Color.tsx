import Spacing from "../../foundation/Spacing";

interface ColorProps {
  hexCode: string;
  width?: keyof Spacing;
  height?: keyof Spacing;
}

const Color = ({ hexCode, width = "lg", height = "lg" }: ColorProps) => {
  const classes = `dse-width-${width} dse-height-${height}`;

  return (
    <div
      className={classes}
      style={{
        backgroundColor: hexCode,
      }}
    ></div>
  );
};

export default Color;
