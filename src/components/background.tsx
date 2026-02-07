export function BackgroundSquare() {
  return (
    <div 
      className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[2000px] h-[1100px] bg-[url('/background.png')] bg-cover bg-center z-0"
      style={{
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)'
      }}
    ></div>
  );
}
