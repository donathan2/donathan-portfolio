export function Darkness({ frame }: { frame: number }) {
  return (
    <div
      className="absolute pointer-events-none z-40"
      style={{
        background: `rgba(0,0,0,${(10 - frame) / 40})`,
        inset: 0,
      }}
    ></div>
  );
}
