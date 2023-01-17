import { Path, Svg } from "react-native-svg";

const HomeSvg = (props) => {
  const strokeColor = "black";
  const fillColor = props.color;
  const strokeWidth = 2;
  return (
    <Svg width={45} height={45} viewBox="0 0 48 48" {...props}>
      <Path
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={fillColor}
        d="M23 14V6h2v8h-2Z"
      />
      <Path
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={fillColor}
        d="M28 11h-8V9h8v2Z"
      />
      <Path
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={fillColor}
        d="M6 28.5c0-.92.539-1.722 1.5-2L15 24v18H6V28.5ZM42 28.5c0-.92-.539-1.722-1.5-2L33 24v18h9V28.5Z"
      />
      <Path
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={fillColor}
        d="M17 42V18.5c0-1 .778-1.5.778-1.5L24 13l6.222 4s.778.5.778 1.5V42h-4V32a3 3 0 1 0-6 0v10h-4Z"
      />
    </Svg>
  );
};

export default HomeSvg;
