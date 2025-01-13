import ClientSquare from "@/components/ClientSquare";
import ServerSquare from "@/components/ServerSquare";
import { getColor } from "@/actions/colors";

export default async function Home() {
  const serverColor = await getColor();
  return (
    <div>
      <ClientSquare />
      <ServerSquare color={serverColor} />
      <ServerSquare color="bg-yellow-300" />
    </div>
  );
}
