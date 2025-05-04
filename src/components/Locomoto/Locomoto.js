import React, { useEffect, useState } from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
// import { Container, Row, Col } from "react-bootstrap";
// import { Card, Button } from "react-bootstrap";
// import { CgWebsite } from "react-icons/cg";
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


// const sectionDescriptions = {
//   TrainControls: "Implemented a complete train control system, including speed, pressure, routing, and customization.",
//   Crafting: "Developed flexible crafting systems, supporting modular recipes and player customization of items.",
//   ResourceLoop: "Built the full gameplay loop of resource gathering, recycling, and exchange for player progression.",
//   ItemInteraction: "Coded various interactable items such as furniture, storage, and machines with specific player feedback.",
//   SpecialInteraction: "Handled unique gameplay features and world interactions such as delivery, exploration and events.",
//   GenericInteraction: "Created a powerful, reusable interaction framework used by all harvest, quest, and pickup actions."
// };



const groups = [
  { key: "TrainControls", title: "Train Controls" },
  { key: "Crafting", title: "Crafting" },
  { key: "ResourceLoop", title: "Resource Loop" },
  { key: "ItemInteraction", title: "Item Interaction" },
  { key: "SpecialInteraction", title: "Special Interaction" },
  { key: "GenericInteraction", title: "Generic Interaction" },
];


function GifSection({ title, description, gifs }) {
  const [open, setOpen] = React.useState(false);
  const previewCount = 2;
  const previewGifs = gifs.slice(0, previewCount);

  return (

    
    <section className="gif-section">
      <div className="gif-preview-header">
        <h3 className="gif-card-title">{title}</h3>
        <p className="gif-card-description">{description}</p>
      </div>
      <div
        className={`gif-grid-container ${open ? "expanded" : "collapsed"}`}
        onClick={() => setOpen(!open)}
      >
        {!open && (
          <>
            <div className="gif-grid preview">
              {previewGifs.map((gif, idx) => (
                <div className="gif-item preview" key={idx}>
                  <GifImage src={gif.src} alt={gif.alt} />
                </div>
              ))}
            </div>
            <div className="preview-overlay">
              <div className="arrow-group">
                <span className="overlay-arrow" />
                <span className="overlay-arrow" />
                <span className="overlay-arrow" />
              </div>
            </div>
          </>
        )}
        {open && (
          <div className="gif-grid expanded-grid">
            {gifs.map((gif, idx) => (
              <div className="gif-item full" key={idx}>
                <GifImage src={gif.src} alt={gif.alt} />
                <p className="gif-caption">{gif.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const heroGifs = [
  {src: Fishing, duration: 2000},
  {src: CraftingResult, duration: 2000},
  {src: Seat, duration: 2000},
  {src: Seed, duration: 2000},
  {src: TrainWallpaper, duration: 2000},
  {src: TrainPaint, duration: 2000},
  {src: Shovel, duration: 2000},
  {src: PickupGarbage, duration: 2000},
];


function HeroSection({ gifs }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // 切换到下一张时，用当前 GIF 的 duration 来定时
    const handle = setTimeout(() => {
      setIdx((i) => (i + 1) % gifs.length);
    }, gifs[idx].duration);

    return () => clearTimeout(handle);
  }, [idx, gifs]);

  return (
    <div className="locomoto-hero">
      <div
        className="locomoto-hero-bg"
        style={{ backgroundImage: `url(${gifs[idx].src})` }}
      />
      <div className="locomoto-hero-overlay" />
      {/* ...内部内容层… */}
    </div>
  );
}

function Locomoto() {
  return (
    
    <div className="locomoto-container">
      <Particle />
      
      
      
      
      {/* 侧边导航栏 */}
      <nav className="side-nav">
        {groups.map((g) => (
          <a key={g.key} href={`#${g.key}`} className="nav-link">
            {g.title}
          </a>
        ))}
      </nav>

      {/* 主体内容 */}
      <main className="locomoto-main">

{/* —— 在 Hero 区上方插入 intro 文本 —— */}
<Container className="home-content" style={{ marginBottom: "2rem" }}>
      <Row>
        <Col>
           <p className="welcome-text">
             欢迎来到 Locomoto 页面，<br />
             跟着火车开启你的冒险之旅！
             我做了以下这些东西：<br />
             1.<br />
             2.<br />
             3.<br />
             4.
           </p>
         </Col>
       </Row>
     </Container>

      <HeroSection gifs={heroGifs} interval={8000} />

      <div className="steam-iframe-container">
  <iframe
    src="https://store.steampowered.com/widget/2328650/"
    title="LocomotoSteam"
    frameBorder="0"
    width="646"
    height="190"
    className="steam-iframe"
  ></iframe>
</div>
        {groups.map((g) => (
          <section id={g.key} key={g.key} className="gif-section">
            <GifSection
              title={g.title}
              description={`这里是 ${g.title} 模块的演示`}
              gifs={locomotoGifs.filter((x) => x.group === g.key)}
            />
          </section>
        ))}
      </main>
    </div>
  )
}

export default Locomoto;

