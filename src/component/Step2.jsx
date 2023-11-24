import Button from "./Button";
import { useState } from "react";
import "../../node_modules/react-simple-tree-menu/dist/main.css";
import TreeMenu from "react-simple-tree-menu";

function Step2({ listItems, setListItems, prevStep, onSubmit }) {
  const treeData = [
    {
      key: "node-1",
      label: "مواد غذایی",
      nodes: [
        {
          key: "node-1-1",
          label: "گوشت",
          nodes: [],
        },
        {
          key: "node-1-2",
          label: "مرغ",
          nodes: [],
        },
        {
          key: "node-1-3",
          label: "ماهی",
          nodes: [],
        },
      ],
    },
    {
      key: "node-2",
      label: "نوشیدنی",
      nodes: [
        {
          key: "node-2-1",
          label: "نوشابه",
          nodes: [
            {
              key: "node-2-1-1",
              label: "نارنجی",
              nodes: [],
            },
            {
              key: "node-2-1-2",
              label: "مشکی",
              nodes: [],
            },
          ],
        },
        {
          key: "node-2-2",
          label: "دوغ",
          nodes: [],
        },
        {
          key: "node-2-3",
          label: "دلستر",
          nodes: [],
        },
      ],
    },
    {
      key: "node-3",
      label: "تنقلات",
      nodes: [
        {
          key: "node-3-1",
          label: "بسته ای",
          nodes: [
            {
              key: "node-3-1-1",
              label: "چیپس",
              nodes: [
                {
                  key: "node-3-1-1-1",
                  label: "خلالی",
                  nodes: [],
                },
                {
                  key: "node-3-1-1-2",
                  label: "چیتوز",
                  nodes: [],
                },
              ],
            },
            {
              key: "node-3-1-2",
              label: "پفک",
              nodes: [
                {
                  key: "node-3-1-2-1",
                  label: "نمکی",
                  nodes: [],
                },
                {
                  key: "node-3-1-2-2",
                  label: "توپی",
                  nodes: [],
                },
              ],
            },
          ],
        },
        {
          key: "node-3-2",
          label: "لواشک",
          nodes: [],
        },
        {
          key: "node-3-3",
          label: "پاستیل",
          nodes: [],
        },
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = useState("");

  function handleSelect(item) {
    if (item.hasNodes === true) return "";
    setSelectedItem(item);
  }

  function handleAddItem(e, newItem) {
    e.preventDefault();

    setListItems([...listItems, newItem]);
  }
  console.log(listItems);
  return (
    <form onSubmit={onSubmit}>
      <div className="list">
        <div className="box">
          <TreeMenu
            hasSearch={false}
            data={treeData}
            onClickItem={handleSelect}
          />
        </div>

        <div className="center">
          {selectedItem && (
            <Button
              name="افزودن"
              onClick={(e) => handleAddItem(e, selectedItem)}
            ></Button>
          )}
        </div>
        <div className="box">
          <p className="center">لیست خرید شما</p>
          <ul>
            {listItems.map((item) => (
              <li key={item.key}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="form-row-2 ">
        <Button name="قبلی" onClick={prevStep} />
        <Button name="تکمیل" />
      </div>
    </form>
  );
}

export default Step2;
