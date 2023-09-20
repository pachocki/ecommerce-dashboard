"use client";

import Heading from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";

import { useParams, useRouter } from "next/navigation";
import { OrderColumn, columns } from "./components/column";
import { DataTable } from "@/components/ui/dataTable";

interface OrderClientProps {
  data: OrderColumn[];
}
const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
      </div>
      <div>
        <Separator />

        <DataTable searchKey="products" columns={columns} data={data} />
      </div>
    </div>
  );
};

export default OrderClient;
