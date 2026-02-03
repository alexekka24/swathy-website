import Marquee from "react-fast-marquee";

export const MarqueeComponent = ({direction, speed}) => {
    
  return (
    <>
      <Marquee direction={direction} gradient={true} gradientWidth={150} speed={speed} gradientColor="#131313" className="bg-black h-[20vh]">
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
        <img src="/assets/images/favicon.png" alt="Client 1" className="h-20 object-contain mx-8"></img>
      </Marquee>
    </>
  );
};
