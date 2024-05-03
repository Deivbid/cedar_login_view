import React, { useState } from "react";

interface HierarchyProps {
  organization: { [key: string]: any };
}

const HierarchyNode = ({ name, children }: { name: string; children: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const nextLevel = Object.keys(children);
  return (
    <div className="p-2">
      <span
        onClick={toggle}
        className="cursor-pointer font-semibold hover:text-blue-500"
      >
        {name} {nextLevel?.length > 0 ? (isOpen ? "▼" : "▶") : ""}
      </span>
      {isOpen && (
        <div className="ml-4 border-l-2 border-gray-300 pl-4">
          {Object.keys(children).map((key) => (
            <HierarchyNode key={key} name={key} children={children[key]} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Hierarchy = ({ organization }: HierarchyProps) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 m-4">
      {Object.keys(organization).map((key) => (
        <HierarchyNode key={key} name={key} children={organization[key]} />
      ))}
    </div>
  );
};
