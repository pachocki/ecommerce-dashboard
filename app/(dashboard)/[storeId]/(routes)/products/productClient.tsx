"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./components/column";
import { DataTable } from "@/components/ui/dataTable";
import ApiList from "@/components/ui/apiList";

interface ProductClientProps {
  data: ProductColumn[];
}
const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      <div className="flex items-center justify-between sm:flex-col sm:items-start">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/new`)}
          className="sm:w-full"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <div>
        <Separator />

        <DataTable searchKey="name" columns={columns} data={data} />
        <Heading title="Api" description="API cals for Products"/>
        <ApiList entityName="products" entityIdName="productId"/>
      </div>
    </div>
  );
};

export default ProductClient;
