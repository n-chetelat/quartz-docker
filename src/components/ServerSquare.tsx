export default async function ServerSquare({ color }: { color: string }) {
  return <div className={`h-52 w-52 ${color}`}></div>;
}
