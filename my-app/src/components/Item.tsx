import {Item as ItemType, handleItem} from "../system/StoreSys";

interface ItemProps {
  item: ItemType;
  sectionId: number;
}

export default function Item({item, sectionId}: ItemProps) {
  return (
    <div id="item">
      <input
        class="check"
        onchange={(e) => {
          handleItem("Check", sectionId, item.itemId);
        }}
        type="checkbox"
      />
      <input
        class="text"
        onchange={(e) => {
          handleItem("Text", sectionId, item.itemId, e.target.value);
        }}
        type="text"
      />
      <button onclick={() => handleItem("Delete", sectionId, item.itemId)}>x</button>
    </div>
  );
}
