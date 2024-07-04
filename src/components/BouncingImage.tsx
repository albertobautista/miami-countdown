import { useEffect, useState } from "preact/hooks";

const BouncingImage = ({
  topPosition,
  leftPosition,
  imgSrc,
}: {
  topPosition: number;
  leftPosition: number;
  imgSrc: string;
}) => {
  const [position, setPosition] = useState({
    top: topPosition,
    left: leftPosition,
  });
  const [velocity, setVelocity] = useState({ top: 2, left: 2 });

  useEffect(() => {
    const moveImage = () => {
      setPosition((prevPosition) => {
        const newTop = prevPosition.top + velocity.top;
        const newLeft = prevPosition.left + velocity.left;

        let newVelocity = { ...velocity };
        if (newTop <= 0 || newTop >= window.innerHeight - 100) {
          // Assuming image height is 100px
          newVelocity.top = -newVelocity.top;
        }
        if (newLeft <= 0 || newLeft >= window.innerWidth - 100) {
          // Assuming image width is 100px
          newVelocity.left = -newVelocity.left;
        }

        setVelocity(newVelocity);

        return { top: newTop, left: newLeft };
      });
    };

    const interval = setInterval(moveImage, 7);

    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <div
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      className="absolute w-24 h-24"
    >
      <img src={imgSrc} alt="Bouncing" className="object-cover w-full h-full" />
    </div>
  );
};

export default BouncingImage;
