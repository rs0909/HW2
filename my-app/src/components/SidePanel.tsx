import {sections} from "../system/StoreSys";
import {For, Show} from "solid-js";
import {sizeStyles} from "./Size";
import {themeStyles} from "./Theme";
import {styled} from "@macaron-css/solid";

const Panel = styled("div", {
  base: sizeStyles.sidePanel,
});
const List = styled("div", {
  base: sizeStyles.sidePanelList,
});
const Item = styled("div", {
  base: sizeStyles.sidePanelItem,
});

export default function SidePanel() {
  return (
    <Panel>
      <List>
        <h3>To-do</h3>
        <For each={sections}>
          {(section) => (
            <For each={section.items}>{(item) => <Show when={!item.completed && item.todo.length > 0}>{<Item>{item.todo}</Item>}</Show>}</For>
          )}
        </For>
      </List>
      <List>
        <h3>Done</h3>
        <For each={sections}>
          {(section) => <For each={section.items}>{(item) => <Show when={item.completed}>{<Item>{item.todo}</Item>}</Show>}</For>}
        </For>
      </List>
    </Panel>
  );
}
