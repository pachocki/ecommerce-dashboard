import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { BsCurrencyDollar, BsFillCreditCard2BackFill } from "react-icons/bs";
import { BiPackage } from "react-icons/bi";
import { getTotalRevenue } from "@/actions/getTotalRevenue";
import { getSalesCount } from "@/actions/getSales";
import { getStockCount } from "@/actions/getStockCount";

import Overview from "@/components/overview";
import { getGraphRevenue } from "@/actions/getGraphRevenue";
import OrdersPage from "./orders/page";
interface DashboardPageProps {
  params: { storeId: string };
}
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const totalSales = await getSalesCount(params.storeId);
  const totalStock = await getStockCount(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId)
  return (
    <div className="flex flex-col  pt-5 px-10 w-[90%] lg:w-full lg:px-5 sm:px-2">
      <Heading title="Dashboard" description="Overview of you store" />
      <div className="grid grid-cols-3 gap-4 lg:gap-2 sm:grid-cols-1 pb-2">
        <Card className="h-auto">
          <CardHeader className="font-medium flex flex-row items-center justify-between lg:p-2">
            <CardTitle className="text-2xl lg:text-xl ">
              <span>Total Revenue</span>
            </CardTitle>
            <BsCurrencyDollar className="text-2xl" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="font-medium flex flex-row items-center justify-between lg:p-2">
            <CardTitle>
              <span className="text-2xl lg:text-xl">Sales</span>
            </CardTitle>
            <BsFillCreditCard2BackFill className="text-2xl" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSales}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="font-medium flex flex-row items-center justify-between lg:p-2">
            <CardTitle>
              <span className="text-2xl lg:text-xl">Products in Stock</span>
            </CardTitle>
            <BiPackage className="text-2xl" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStock}</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="font-medium flex flex-row items-center justify-between lg:p-2">
          <CardTitle>
            <span className="text-2xl lg:text-xl">Overview</span>
          </CardTitle>
          <BiPackage className="text-2xl" />
        </CardHeader>
        <CardContent className="p-0">
          <Overview data={graphRevenue} />
        </CardContent>
      </Card>
      <OrdersPage params={params} dashboard />
    </div>
  );
};

export default DashboardPage;
