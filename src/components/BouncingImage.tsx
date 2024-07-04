import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

interface BouncingImageProps {
  topPosition: number;
  leftPosition: number;
  imgSrc: string;
}

interface Position {
  top: number;
  left: number;
}

interface Velocity {
  top: number;
  left: number;
}

const BouncingImage = ({
  topPosition,
  leftPosition,
  imgSrc,
}: BouncingImageProps) => {
  const [position, setPosition] = useState<Position>({
    top: topPosition,
    left: leftPosition,
  });
  const [velocity, setVelocity] = useState<Velocity>({ top: 2, left: 2 });
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const moveImage = () => {
      setPosition((prevPosition) => {
        let newTop = prevPosition.top + velocity.top;
        let newLeft = prevPosition.left + velocity.left;

        const imageHeight = 100; // Assuming image height is 100px
        const imageWidth = 100; // Assuming image width is 100px

        let newVelocity = { ...velocity };

        if (newTop <= 0) {
          newTop = 0;
          newVelocity.top = Math.abs(newVelocity.top);
        } else if (newTop >= window.innerHeight - imageHeight) {
          newTop = window.innerHeight - imageHeight;
          newVelocity.top = -Math.abs(newVelocity.top);
        }

        if (newLeft <= 0) {
          newLeft = 0;
          newVelocity.left = Math.abs(newVelocity.left);
        } else if (newLeft >= window.innerWidth - imageWidth) {
          newLeft = window.innerWidth - imageWidth;
          newVelocity.left = -Math.abs(newVelocity.left);
        }

        setVelocity(newVelocity);

        return { top: newTop, left: newLeft };
      });

      setRotation((prevRotation) => (prevRotation + 1) % 360);
    };

    const interval = setInterval(moveImage, 7);

    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <div
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: `rotate(${rotation}deg)`,
      }}
      className="absolute w-24 h-24"
    >
      <img src={imgSrc} alt="Bouncing" className="object-cover w-full h-full" />
    </div>
  );
};

export default BouncingImage;
