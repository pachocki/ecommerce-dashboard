
import prismadb from "@/lib/prismadb";
import { ProductColumn } from "./components/column";
import { format } from "date-fns";
import ProductClient from "./productClient";
import { formatter } from "@/lib/utils";


const ProductsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    description:item.description,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex flex-col w-2/3 lg:w-4/5 md:w-full">
      <div className="flex-1 space-y-4 p-8 pt-6 sm:p-2">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;