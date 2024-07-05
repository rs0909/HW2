import {createStore, produce} from "solid-js/store";
import Item from "../components/Item";

// To be updated
// 0. Make StoreSys as class and export as an object
// 1. Functional Programming
// 3. reduce redundant objects in CSS

//Functional Programming
export interface Item {
  itemId: number;
  todo: string;
  completed: boolean;
}

export interface Section {
  sectionId: number;
  items: Item[];
}

const [sections, setSections] = createStore<Section[]>([]);

// Optimize functions
function handleSection(): void {
  const newSectionId = sections.length > 0 ? sections.length + 1 : 1;
  const newSection: Section = {
    sectionId: newSectionId,
    items: [],
  };

  setSections([...sections, newSection]);
}

function handleItem(action: string, sectionId: number, itemId: number = 0, inputText: string = ""): void {
  setSections(
    (section) => section.sectionId === sectionId,
    produce((section) => {
      if (action === "Add") {
        const sectionItems = section.items;
        const newItemId = sectionItems.length > 0 ? sectionItems[sectionItems.length - 1].itemId + 1 : 0;
        const newItem = {
          itemId: newItemId,
          todo: "",
          completed: false,
        };
        section.items.push(newItem);
      } else if (action === "Text") {
        const item = section.items.find((item) => item.itemId === itemId);
        if (item) {
          item.todo = inputText;
        }
      } else if (action === "Check") {
        const item = section.items.find((item) => item.itemId === itemId);
        if (item) {
          item.completed = !item.completed;
        }
      } else if (action === "Delete") {
        section.items = section.items.filter((item) => item.itemId !== itemId);
      }
      //   else if (action === "DeleteSEciton")
    })
  );
}

export {sections, handleSection, handleItem};
// Item Add Button
