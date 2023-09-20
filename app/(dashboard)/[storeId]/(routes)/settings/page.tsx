import SettingsForm from "@/components/forms/settingsForm";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface SettingsPageProps {
  params: { storeId: string };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: { id: params.storeId, userId },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <div className="flex flex-col w-2/3 lg:w-4/5 md:w-full">
      <div className="flex-1 space-y-4 p-8 pt-6 sm:p-2">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
