"use client";
import { Hierarchy } from "@/components/Hierarchy";

const Management = () => {
  const org = {
    CEO: {
      "VP of Product": {
        "Director of Product": {},
      },
      CFO: {
        "Head of Accounting": {},
      },
      "VP of Engineering": {
        "EM - Platform": {},
        "EM - Product": {},
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 md:p-0">
      <h1 className="text-2xl md:text-3xl font-semibold text-[#012D67] text-center">
        Welcome to the user management page
      </h1>
      <h2 className="text-2xl mt-4 text-center">
        This is the Hierarchy of the Company
      </h2>

      <Hierarchy organization={org} />
    </div>
  );
};

export default Management;
