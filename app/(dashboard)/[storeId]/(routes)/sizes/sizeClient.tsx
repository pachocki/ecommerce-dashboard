"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./components/column";
import { DataTable } from "@/components/ui/dataTable";
import ApiList from "@/components/ui/apiList";

interface SizesClientProps {
  data: SizeColumn[];
}
const SizesClient: React.FC<SizesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      <div className="sm:flex-col sm:items-start">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
          className="sm:w-full"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <div>
        <Separator />

        <DataTable searchKey="name" columns={columns} data={data} />
        <Heading title="Api" description="API cals for sizes"/>
        <ApiList entityName="sizes" entityIdName="sizeId"/>
      </div>
    </div>
  );
};

export default SizesClient;
