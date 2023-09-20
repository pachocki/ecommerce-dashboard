import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

import { OrderColumn } from "./components/column";
import OrderClient from "./orderClient";
interface OrdersPageProps {
  params: {
    storeId: string;
  };
  dashboard?: boolean;
}
const OrdersPage: React.FC<OrdersPageProps> = async ({ params, dashboard }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div
      className={`flex flex-col w-2/3 lg:w-4/5 md:w-full ${
        dashboard ? "!w-full " : " "
      }`}
    >
      <div className={`flex-1 space-y-4 pt-6 sm:p-2 ${
        dashboard ? "w-full p-0 sm:px-0" : "p-8"
      }`}>
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
