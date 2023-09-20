
import {  auth } from "@clerk/nextjs";
import MainNav from "./mainnav";
import StoreSwitcher from "../storeSwitcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ModeToggle } from "../ui/ModeToggle";



const Navbar = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({ where: { userId } });
  return (
    <div className="border-b shadow px-[0.8rem]">
      <div className="flex gap-4 h-16 items-center xl:gap-0">
        <div>
          <StoreSwitcher items={stores} />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle/>
          <MainNav />
      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
