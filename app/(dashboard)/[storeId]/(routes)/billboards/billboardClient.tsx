"use client"

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./components/column";
import { DataTable } from "@/components/ui/dataTable";
import ApiList from "@/components/ui/apiList";

interface BillboardClientProps {
  data: BillboardColumn[];
}
const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      <div className="flex items-center justify-between sm:flex-col sm:items-start">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage bilboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
          className="sm:w-full"
        >
          <Plus className="mr-2 h-4 w-4 sm:hidden" />
          Add New
        </Button>
      </div>
      <div>
        <Separator />

        <DataTable searchKey="label" columns={columns} data={data} />
        <Heading title="Api" description="API cals for Billboards"/>
        <ApiList entityName="billboards" entityIdName="billboardId"/>
      </div>
    </div>
  );
};

export default BillboardClient;
