import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import GifImage from "../GifImage";
// import ProjectCard from "./components/Projects/ProjectCards";
// import Particle from "./components/Projects/Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
//  import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
//import LargeProjectCards from "./LargeProjectCards";

//gifs

//train controls
import BreakInteraction from "../../Assets/LocomotoAssets/BreakInteraction.gif";
import Chop from "../../Assets/LocomotoAssets/Chop.gif";
import CoalWagon from "../../Assets/LocomotoAssets/CoalWagon.gif";
import Combine from "../../Assets/LocomotoAssets/Combine.gif";
import CommunityBoard from "../../Assets/LocomotoAssets/CommunityBoard.gif";
import CraftingRecipes from "../../Assets/LocomotoAssets/CraftingRecipes.gif";
import CraftingResoucePlacement from "../../Assets/LocomotoAssets/CraftingResoucePlacement.gif";
import CraftingResult from "../../Assets/LocomotoAssets/CraftingResult.gif";
import Delivery1 from "../../Assets/LocomotoAssets/Delivery1.gif";
import Delivery2 from "../../Assets/LocomotoAssets/Delivery2.gif";
import DeliveryBox from "../../Assets/LocomotoAssets/DeliveryBox.gif";
import EnginePressureSettting from "../../Assets/LocomotoAssets/EnginePressureSettting.png";
import FancySeatCraftingPattern from "../../Assets/LocomotoAssets/FancySeatCraftingPattern.png";
import FancySeatIV from "../../Assets/LocomotoAssets/FancySeatIV.gif";
import Fishing from "../../Assets/LocomotoAssets/Fishing.gif";
import Fume from "../../Assets/LocomotoAssets/Fume.gif";
import GarbageToken from "../../Assets/LocomotoAssets/GarbageToken.gif";
import HotCocoaMachine from "../../Assets/LocomotoAssets/HotCocoaMachine.gif";
import HouseSign from "../../Assets/LocomotoAssets/HouseSign.gif";
import MapStamp from "../../Assets/LocomotoAssets/MapStamp.gif";
import Mine from "../../Assets/LocomotoAssets/Mine.gif";
import MirrorPattern1 from "../../Assets/LocomotoAssets/MirrorPattern1.png";
import MirrorPattern2 from "../../Assets/LocomotoAssets/MirrorPattern2.png";
import NPCHungerSetting from "../../Assets/LocomotoAssets/NPCHungerSetting.png";
import NPCLeaveToken from "../../Assets/LocomotoAssets/NPCLeaveToken.gif";
import NPCService from "../../Assets/LocomotoAssets/NPCService.gif";
import PickupGarbage from "../../Assets/LocomotoAssets/PickupGarbage.gif";
import Pinwheel from "../../Assets/LocomotoAssets/Pinwheel.gif";
import PressureExplode from "../../Assets/LocomotoAssets/PressureExplode.gif";
import Repair from "../../Assets/LocomotoAssets/Repair.gif";
import RoutePlanner from "../../Assets/LocomotoAssets/RoutePlanner.gif";
import Seat from "../../Assets/LocomotoAssets/Seat.gif";
import Seed from "../../Assets/LocomotoAssets/Seed.gif";
import ShakeTree from "../../Assets/LocomotoAssets/ShakeTree.gif";
import Shelf from "../../Assets/LocomotoAssets/Shelf.gif";
import Shovel from "../../Assets/LocomotoAssets/Shovel.gif";
import ShovelCoal from "../../Assets/LocomotoAssets/ShovelCoal.gif";
import StartTrian from "../../Assets/LocomotoAssets/StartTrian.gif";
import TableFold from "../../Assets/LocomotoAssets/TableFold.gif";
import ToiletDoor from "../../Assets/LocomotoAssets/ToiletDoor.gif";
import TokenExchange from "../../Assets/LocomotoAssets/TokenExchange.gif";
import ToolStorage from "../../Assets/LocomotoAssets/ToolStorage.gif";
import TrainFastSpeed from "../../Assets/LocomotoAssets/TrainFastSpeed.gif";
import TrainPaint from "../../Assets/LocomotoAssets/TrainPaint.gif";
import TrainWallpaper from "../../Assets/LocomotoAssets/TrainWallpaper.gif";
import TreasureBox from "../../Assets/LocomotoAssets/TreasureBox.gif";
import WallpaperPaintStorage from "../../Assets/LocomotoAssets/WallpaperPaintStorage.gif";
import Whistle from "../../Assets/LocomotoAssets/Whistle.gif";
import GenericInteraction from "../../Assets/LocomotoAssets/GenericInteraction.png";

const locomotoGifs = [
  { src: BreakInteraction, alt: "BreakInteraction", group: "ResourceLoop", caption: "Player plans train routes through a node system." },
  { src: Chop, alt: "Chop", group: "GenericInteraction" },
  { src: CoalWagon, alt: "CoalWagon", group: "TrainControls" },
  { src: Combine, alt: "Combine", group: "GenericInteraction" },
  { src: CommunityBoard, alt: "CommunityBoard", group: "SpecialInteraction" },
  { src: CraftingRecipes, alt: "CraftingRecipes", group: "Crafting" },
  { src: CraftingResoucePlacement, alt: "CraftingResoucePlacement", group: "Crafting" },
  { src: CraftingResult, alt: "CraftingResult", group: "Crafting" },
  { src: Delivery1, alt: "Delivery1", group: "ResourceLoop" },
  { src: Delivery2, alt: "Delivery2", group: "ResourceLoop" },
  { src: DeliveryBox, alt: "DeliveryBox", group: "SpecialInteraction" },
  { src: EnginePressureSettting, alt: "EnginePressureSettting", group: "TrainControls" },
  { src: FancySeatCraftingPattern, alt: "FancySeatCraftingPattern", group: "Crafting" },
  { src: FancySeatIV, alt: "FancySeatIV", group: "Crafting" },
  { src: Fishing, alt: "Fishing", group: "SpecialInteraction" },
  { src: Fume, alt: "Fume", group: "GenericInteraction" },
  { src: GarbageToken, alt: "GarbageToken", group: "ResourceLoop" },
  { src: HotCocoaMachine, alt: "HotCocoaMachine", group: "ItemInteraction" },
  { src: HouseSign, alt: "HouseSign", group: "GenericInteraction" },
  { src: MapStamp, alt: "MapStamp", group: "GenericInteraction" },
  { src: Mine, alt: "Mine", group: "GenericInteraction" },
  { src: MirrorPattern1, alt: "MirrorPattern1", group: "Crafting" },
  { src: MirrorPattern2, alt: "MirrorPattern2", group: "Crafting" },
  { src: NPCHungerSetting, alt: "NPCHungerSetting", group: "ResourceLoop" },
  { src: NPCLeaveToken, alt: "NPCLeaveToken", group: "ResourceLoop" },
  { src: NPCService, alt: "NPCService", group: "ResourceLoop" },
  { src: PickupGarbage, alt: "PickupGarbage", group: "ResourceLoop" },
  { src: Pinwheel, alt: "Pinwheel", group: "ItemInteraction" },
  { src: PressureExplode, alt: "PressureExplode", group: "TrainControls" },
  { src: Repair, alt: "Repair", group: "GenericInteraction" },
  { src: RoutePlanner, alt: "RoutePlanner", group: "TrainControls" },
  { src: Seat, alt: "Seat", group: "ItemInteraction" },
  { src: Seed, alt: "Seed", group: "SpecialInteraction" },
  { src: ShakeTree, alt: "ShakeTree", group: "GenericInteraction" },
  { src: Shelf, alt: "Shelf", group: "ItemInteraction" },
  { src: Shovel, alt: "Shovel", group: "GenericInteraction" },
  { src: ShovelCoal, alt: "ShovelCoal", group: "TrainControls" },
  { src: StartTrian, alt: "StartTrian", group: "TrainControls" },
  { src: TableFold, alt: "TableFold", group: "ItemInteraction" },
  { src: ToiletDoor, alt: "ToiletDoor", group: "GenericInteraction" },
  { src: TokenExchange, alt: "TokenExchange", group: "ResourceLoop" },
  { src: ToolStorage, alt: "ToolStorage", group: "ItemInteraction" },
  { src: TrainFastSpeed, alt: "TrainFastSpeed", group: "TrainControls" },
  { src: TrainPaint, alt: "TrainPaint", group: "Customization" },
  { src: TrainWallpaper, alt: "TrainWallpaper", group: "Customization" },
  { src: TreasureBox, alt: "TreasureBox", group: "GenericInteraction" },
  { src: WallpaperPaintStorage, alt: "WallpaperPaintStorage", group: "ItemInteraction" },
  { src: Whistle, alt: "Whistle", group: "TrainControls" },
  { src: GenericInteraction, alt: "GenericInteraction", group: "GenericInteraction" }
];


const sectionDescriptions = {
  TrainControls: "Implemented a complete train control system, including speed, pressure, routing, and customization.",
  Crafting: "Developed flexible crafting systems, supporting modular recipes and player customization of items.",
  ResourceLoop: "Built the full gameplay loop of resource gathering, recycling, and exchange for player progression.",
  ItemInteraction: "Coded various interactable items such as furniture, storage, and machines with specific player feedback.",
  SpecialInteraction: "Handled unique gameplay features and world interactions such as delivery, exploration and events.",
  GenericInteraction: "Created a powerful, reusable interaction framework used by all harvest, quest, and pickup actions."
};

<GifSection
  title="🚂 TrainControls"
  description="Train control system including speed, routing, customization..."
  gifs={locomotoGifs.filter(g => g.group === 'TrainControls')}
/>

function GifSection({ title, description, gifs }) {
  const [open, setOpen] = React.useState(false);

  return (
    <section className={`gif-section ${open ? "open" : ""}`}>      
      <button className="gif-toggle-pill" onClick={() => setOpen(!open)}>
        <span className="arrow-icon">{open ? "▾" : "▸"}</span>
        <span className="gif-toggle-label">{title}</span>
      </button>
      <p className="gif-expand-description">{description}</p>

      {open && (
        <div
          className="gif-collapse-wrapper"
          style={{
            maxHeight: "1000px",
            overflow: "hidden",
            transition: "max-height 0.6s ease, opacity 0.6s ease",
            opacity: 1
          }}
        >
          <div className="gif-grid">
            {gifs.map((gif, index) => (
              <div className="gif-item" key={index}>
                <GifImage src={gif.src} alt={gif.alt} />
                <p className="gif-caption">{gif.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function Locomoto() {
  return (
    <div className="locomoto-page">
      <GifSection
        title="🚂 Train Controls"
        description="Implemented a complete train control system, including speed, pressure, routing, and customization."
        gifs={locomotoGifs.filter(g => g.group === "TrainControls")}
      />

      <GifSection
        title="🛠 Crafting"
        description="Developed flexible crafting systems, supporting modular recipes and player customization of items."
        gifs={locomotoGifs.filter(g => g.group === "Crafting")}
      />

      <GifSection
        title="♻️ Resource Loop"
        description="Built the full gameplay loop of resource gathering, recycling, and exchange for player progression."
        gifs={locomotoGifs.filter(g => g.group === "ResourceLoop")}
      />

      <GifSection
        title="🧱 Item Interaction"
        description="Coded various interactable items such as furniture, storage, and machines with specific player feedback."
        gifs={locomotoGifs.filter(g => g.group === "ItemInteraction")}
      />

      <GifSection
        title="🎯 Special Interaction"
        description="Handled unique gameplay features and world interactions such as delivery, exploration and events."
        gifs={locomotoGifs.filter(g => g.group === "SpecialInteraction")}
      />

      <GifSection
        title="⚙️ Generic Interaction"
        description="Created a powerful, reusable interaction framework used by all harvest, quest, and pickup actions."
        gifs={locomotoGifs.filter(g => g.group === "GenericInteraction")}
      />
    </div>
  );
}

export default Locomoto;

