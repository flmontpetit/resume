import { Line, Svg } from "@react-pdf/renderer";

const Separator = () => {
  return (
    <Svg height="1">
      <Line x1="0" y1="0" x2="590" y2="0" strokeWidth={1} stroke="#000000" />
    </Svg>
  );
}

export default Separator;