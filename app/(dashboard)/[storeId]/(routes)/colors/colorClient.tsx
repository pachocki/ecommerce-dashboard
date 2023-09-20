"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColorColumn, columns } from "./components/column";
import { DataTable } from "@/components/ui/dataTable";
import ApiList from "@/components/ui/apiList";

interface ColorsClientProps {
  data: ColorColumn[];
}
const ColorsClient: React.FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      <div className="flex items-center justify-between sm:flex-col sm:items-start">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage color for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/colors/new`)}
          className="sm:w-full"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <div>
        <Separator />

        <DataTable searchKey="name" columns={columns} data={data} />
        <Heading title="Api" description="API cals for colors"/>
        <ApiList entityName="colors" entityIdName="colorId"/>
      </div>
    </div>
  );
};

export default ColorsClient;
