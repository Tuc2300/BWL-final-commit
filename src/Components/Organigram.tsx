import React, { JSX } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

interface NodeData {
  name: string;
  children?: NodeData[];
}

const data: NodeData = {
  name: "Geschäftsführung (51 MA)",
  children: [
    {
      name: "Leitung Projekte/Support/Kundenbetreuung (7 MA)",
      children: [
        {
          name: "Support",
          children: [
            { name: "RMA" },
            { name: "Kundenbetreuung" },
          ],
        },
      ],
    },
    {
      name: "Leitung Marketing/PR (5 MA)",
      children: [
        { name: "Channel" },
        { name: "Banken" },
        { name: "Layout/Online" },
      ],
    },
    {
      name: "Leitung Vertrieb (7 MA)",
      children: [
        {
          name: "Außendienst Channel",
          children: [
            { name: "Außendienst Banken" },
            { name: "Innendienst" },
          ],
        },
      ],
    },
    {
      name: "Leitung Entwicklung (17 MA + 2 MA extern)",
      children: [
        { name: "Software Entwicklung timeCard" },
        { name: "Hardware/Firmwareentwicklung" },
        { name: "Software Entwicklung SUSY" },
        { name: "Konstruktion/Produktdesign" },
        { name: "Systemtest" },
        { name: "Treiberentwicklung" },
        {
          name: "Ausbilder",
          children: [
            { name: "Ausbildung" },
          ],
        },
      ],
    },
    {
      name: "Leitung Produktion (10 MA)",
      children: [
        { name: "Qualitätsmanagement" },
        { name: "SCM/Arbeitsvorbereitung/Disposition" },
        { name: "Produktion" },
        { name: "Versand/Shop" },
      ],
    },
    {
      name: "Leitung Produktmanagement (10 MA)",
      children: [
        { name: "PM timeCard" },
        { name: "PM CKL/ZEA" },
      ],
    },
    {
      name: "Stabsstellen",
      children: [
        { name: "Datenschutzbeauftragte" },
        { name: "Sicherheitsfachkraft" },
        { name: "Empfang" },
      ],
    },
  ],
};

const renderTree = (node: NodeData): JSX.Element => (
  <TreeNode
    label={
      <div className="p-2 text-xs cursor-pointer transition-all rounded border bg-[#33312b] border-[#fbba00]">
        <div className="font-medium text-[#fbba00]">
          {node.name.split("(")[0].trim()}
        </div>
        {node.name.includes("(") && (
          <div className="text-white">
            {node.name.substring(node.name.indexOf("(")).trim()}
          </div>
        )}
      </div>
    }
  >
    {node.children?.map((child, index) => (
      <React.Fragment key={index}>{renderTree(child)}</React.Fragment>
    ))}
  </TreeNode>
);

const Organigram = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm overflow-auto h-[500px]">
      <Tree
        lineWidth="1px"
        lineColor="#33312b"
        lineBorderRadius="4px"
        label={
          <div className="bg-[#33312b] cursor-pointer text-white p-3 rounded-md font-bold text-sm">
            {data.name.split("(")[0].trim()}
          </div>
        }
      >
        {data.children?.map((child, index) => (
          <React.Fragment key={index}>{renderTree(child)}</React.Fragment>
        ))}
      </Tree>
    </div>
  );
};

export default Organigram;
