"use client"

import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import { toast } from "react-hot-toast";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {

    const onCopy =()=>{
        navigator.clipboard.writeText(description)
        toast.success("Api Route copied to the clipboard")
    }
  return (
    <Alert className="sm:p-2 my-2">
      <Server className="h-4 w-4 sm:hidden" />
     
      <AlertTitle >
        {title}

        <Badge className="ml-2 sm:ml-0" variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
    
      <AlertDescription className="mt-4 flex gap-2 items-center justify-between !pl-0">
        <code className=" relative rounded bg-muted px-2 py-[0.2rem] font-moro text-sm font-semibold transition-all  cursor-pointer xs:text-[0.7rem]" onClick={onCopy}>
          {description}
        </code>
        <Button variant="outline" size="icon" onClick={onCopy}>
            <Copy className="h-4 w-4"/>
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default ApiAlert;
