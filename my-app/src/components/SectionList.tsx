import Section from "./Section";
import {handleSection, sections} from "../system/StoreSys";
import {For} from "solid-js";

export default function SectionList() {
  // Section
  // AddButton
  return (
    <>
      <div class="section-list">
        <For each={sections}>
          {(section) => (
            <div>
              <Section section={section} />
            </div>
          )}
        </For>
        <button class="add-button" onClick={handleSection}>
          +
        </button>
      </div>
    </>
  );
}
