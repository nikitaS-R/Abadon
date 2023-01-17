import React, { useRef, useState } from "react";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { Path } from "react-native-svg";

interface AnimatedStrokeProps {
  d: string;
  progress: Animated.SharedValue<number>;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedStroke = ({ d, progress }: AnimatedStrokeProps) => {
  const [length, setLength] = useState(0);
  const ref = useRef<Path>(null);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: length - length * progress.value,
  }));
  return (
    <>
      <AnimatedPath
        animatedProps={animatedProps}
        onLayout={() => setLength(ref.current!.getTotalLength())}
        ref={ref}
        d={d}
        stroke="white"
        strokeWidth={2}
        strokeDasharray={length}
      />
    </>
  );
};

export default AnimatedStroke;
