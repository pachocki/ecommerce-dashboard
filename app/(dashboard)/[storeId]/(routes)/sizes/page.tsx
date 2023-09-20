
import prismadb from "@/lib/prismadb";
import SizesClient from "./sizeClient";
import { SizeColumn } from "./components/column";
import { format } from "date-fns";
const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: "desc" },
  });
  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value:item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"), 
  }));
  return (
    <div className="flex flex-col w-2/3 lg:w-4/5 md:w-full">
      <div className="flex-1 space-y-4 p-8 pt-6 sm:p-2">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
