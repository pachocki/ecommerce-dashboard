
import prismadb from "@/lib/prismadb";
import { CategoryColumn } from "./components/column";
import { format } from "date-fns";
import CategoryClient from "./categoryClient";
const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: { storeId: params.storeId },
    include: { billboard: true },
    orderBy: { createdAt: "desc" },
  });
  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex flex-col w-2/3 lg:w-4/5 md:w-full">
      <div className="flex-1 space-y-4 p-8 pt-6 sm:p-2">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default BillboardsPage;
