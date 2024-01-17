import { Line, Svg } from "@react-pdf/renderer";

export default () => {
  return (
    <Svg height="1">
      <Line x1="0" y1="0" x2="590" y2="0" strokeWidth={1} stroke="#000000" />
    </Svg>
  );
}