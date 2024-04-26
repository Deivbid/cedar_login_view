"use client";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Management = () => {
  const router = useRouter();

  const onBackHandler = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 md:p-0">
      <h1 className="text-2xl md:text-3xl font-semibold text-[#012D67] text-center">
        Welcome to the user management page
      </h1>
      <h2 className="text-2xl mt-4 text-center">
        You made it! You have completed the demo 🥳
      </h2>

      <Button
        onClick={onBackHandler}
        className=" bg-[#3667E9] font-bold rounded-xl py-6 mt-5"
      >
        <MoveLeft className="mr-2" />
        Go back to Login page
      </Button>
    </div>
  );
};

export default Management;
