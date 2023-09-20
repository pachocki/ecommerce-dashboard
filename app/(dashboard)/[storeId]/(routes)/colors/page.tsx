

import prismadb from "@/lib/prismadb";

import { ColorColumn } from "./components/column";
import { format } from "date-fns";
import ColorsClient from "./colorClient";
const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: "desc" },
  });
  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value:item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"), 
  }));
  return (
    <div className="flex flex-col w-2/3 lg:w-4/5 md:w-full">
      <div className="flex-1 space-y-4 p-8 pt-6 sm:p-2">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage ;
