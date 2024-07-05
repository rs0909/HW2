import Item from "./Item";
import {Section as SectionType, handleItem} from "../system/StoreSys";
import {For} from "solid-js";

interface SectionProps {
  section: SectionType;
}

export default function Section({section}: SectionProps) {
  // section title
  // item
  // item add button
  return (
    <div id="section">
      <h2>
        <input class="text" type="text" />
        <button class="button">x</button>
      </h2>
      <For each={section.items}>
        {(item) => (
          <li>
            <Item item={item} sectionId={section.sectionId} />
          </li>
        )}
      </For>
      <button class="add-button" onclick={() => handleItem("Add", section.sectionId)}>
        +
      </button>
    </div>
  );
}
