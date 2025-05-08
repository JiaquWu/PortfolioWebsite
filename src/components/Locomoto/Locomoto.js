import React, { useEffect, useRef,useState } from "react";
import Particle from "../Particle";
import { Container} from "react-bootstrap";
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
//import { HashLink } from 'react-router-hash-link';
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
/*import EnginePressureSettting from "../../Assets/LocomotoAssets/EnginePressureSettting.png";*/
import FancySeatCraftingPattern from "../../Assets/LocomotoAssets/FancySeatCraftingPattern.png";
import FancySeatIV from "../../Assets/LocomotoAssets/FancySeatIV.gif";
import Fishing from "../../Assets/LocomotoAssets/Fishing.gif";
import Fume from "../../Assets/LocomotoAssets/Fume.gif";
import GarbageToken from "../../Assets/LocomotoAssets/GarbageToken.gif";
import HotCocoaMachine from "../../Assets/LocomotoAssets/HotCocoaMachine.gif";
import HouseSign from "../../Assets/LocomotoAssets/HouseSign.gif";
import MapStamp from "../../Assets/LocomotoAssets/MapStamp.gif";
import Mine from "../../Assets/LocomotoAssets/Mine.gif";
//import MirrorPattern1 from "../../Assets/LocomotoAssets/MirrorPattern1.png";
//import MirrorPattern2 from "../../Assets/LocomotoAssets/MirrorPattern2.png";
/*import NPCHungerSetting from "../../Assets/LocomotoAssets/NPCHungerSetting.png";*/
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
import Wave from "../../Assets/LocomotoAssets/Wave.gif";
import TwoGarbageBags from "../../Assets/LocomotoAssets/TwoGarbageBags.gif";
import OldGearbox from "../../Assets/LocomotoAssets/OldGearbox.gif";
import OldShovel from "../../Assets/LocomotoAssets/OldShovel.gif";
import OldShelf from "../../Assets/LocomotoAssets/OldShelf.gif";
import OldCraft from "../../Assets/LocomotoAssets/OldCraft.gif";
import OldDorian from "../../Assets/LocomotoAssets/OldDorian.gif";
import FriendshipHeart from "../../Assets/LocomotoAssets/FriendshipHeart.gif";


const locomotoGifs = [
    // TrainControls
    {
        src: RoutePlanner, alt: "RoutePlanner", group: "TrainControls",
        caption: "Players lay out their train’s path by placing pins on the map."
    },
    {
        src: CoalWagon, alt: "CoalWagon", group: "TrainControls",
        caption: "Players get coals from the coal wagon"
    },
    {
        src: ShovelCoal, alt: "ShovelCoal", group: "TrainControls",
        caption: "Players shovel coal into the furnace to raise engine pressure."
    },
    {
        src: StartTrian, alt: "StartTrian", group: "TrainControls",
        caption: "Players engage the gearbox to get the train moving."
    },
    {
        src: PressureExplode, alt: "PressureExplode", group: "TrainControls",
        caption: "Overpressure can trigger a dramatic boiler explosion in the engine room."
    },
    {
        src: Whistle, alt: "Whistle", group: "TrainControls",
        caption: "Players blow the whistle to safely vent excess steam pressure."
    },
    {
        src: TrainFastSpeed, alt: "TrainFastSpeed", group: "TrainControls",
        caption: "Keeping the preesure in a certain zone for a while propels the train at thrilling top speeds."
    },

    // Crafting
    {
        src: CraftingRecipes, alt: "CraftingRecipes", group: "Crafting",
        caption: "A numerous amount of cratable items for player to choose, each item has a unique crafting pattern"
    },
    {
        src: CraftingResoucePlacement, alt: "CraftingResoucePlacement", group: "Crafting",
        caption: "Players place resources freely on crafting table with the recipe as a reference"
    },
    {
        src: CraftingResult, alt: "CraftingResult", group: "Crafting",
        caption: "The newly crafted item appears once the recipe requirements are met."
    },
    {
        src: FancySeatCraftingPattern, alt: "FancySeatCraftingPattern", group: "Crafting",
        caption: "Players follow a special seat pattern to create decorative furniture."
    },
    {
        src: FancySeatIV, alt: "FancySeatIV", group: "Crafting",
        caption: "The finished fancy seat is added to inventory for later placement."
    },

    // ResourceLoop
    {
        src: PickupGarbage, alt: "PickupGarbage", group: "ResourceLoop",
        caption: "Players collect garbage tokens left behind by NPCs."
    },
    {
        src: GarbageToken, alt: "GarbageToken", group: "ResourceLoop",
        caption: "Garbage tokens represent resources that can be recycled or exchanged."
    },
    {
        src: NPCService, alt: "NPCService", group: "ResourceLoop",
        caption: "NPCs interact with service stations, generating token rewards."
    },
    {
        src: NPCLeaveToken, alt: "NPCLeaveToken", group: "ResourceLoop",
        caption: "After service, NPCs drop tokens players can pick up."
    },
    {
        src: Delivery1, alt: "Delivery1", group: "ResourceLoop",
        caption: "Players load delivery crates onto the train for transport."
    },
    {
        src: Delivery2, alt: "Delivery2", group: "ResourceLoop",
        caption: "Delivered crates are unpacked at the destination station."
    },
    {
        src: TokenExchange, alt: "TokenExchange", group: "ResourceLoop",
        caption: "Players trade collected tokens at kiosks for crafting materials."
    },
    {
        src: BreakInteraction, alt: "BreakInteraction", group: "ResourceLoop",
        caption: "Players break crates and barrels to discover hidden items."
    },

    // ItemInteraction
    {
        src: HotCocoaMachine, alt: "HotCocoaMachine", group: "ItemInteraction",
        caption: "Players brew hot cocoa to serve warming drinks to NPCs."
    },
    {
        src: Pinwheel, alt: "Pinwheel", group: "ItemInteraction",
        caption: "Players spin the pinwheel for whimsical animation feedback."
    },
    {
        src: Seat, alt: "Seat", group: "ItemInteraction",
        caption: "Players pick up and place seats to create resting areas."
    },
    {
        src: TwoGarbageBags, alt: "TwoGarbageBags", group: "ItemInteraction",
        caption: "Players handle two garbage bags at once for efficient cleanup."
    },
    {
        src: Shelf, alt: "Shelf", group: "ItemInteraction",
        caption: "Players store items on shelves for organized inventory."
    },
    {
        src: ToolStorage, alt: "ToolStorage", group: "ItemInteraction",
        caption: "Players open tool chests to access workshop tools."
    },
    {
        src: TableFold, alt: "TableFold", group: "ItemInteraction",
        caption: "Players fold and unfold tables to change workshop layouts."
    },
    {
        src: WallpaperPaintStorage, alt: "WallpaperPaintStorage", group: "ItemInteraction",
        caption: "Players choose wallpaper and paint to decorate rooms."
    },

    // Feature-Specific Interaction
    {
        src: TrainPaint, alt: "TrainPaint", group: "Feature-Specific Interaction",
        caption: "Players apply custom paint schemes to personalize the train."
    },
    {
        src: TrainWallpaper, alt: "TrainWallpaper", group: "Feature-Specific Interaction",
        caption: "Players wallpaper the train’s interior with selectable patterns."
    },
    {
        src: Fishing, alt: "Fishing", group: "Feature-Specific Interaction",
        caption: "Players cast lines into water bodies to catch fish."
    },
    {
        src: Seed, alt: "Seed", group: "Feature-Specific Interaction",
        caption: "Players plant seeds in plots and watch crops grow."
    },
    {
        src: DeliveryBox, alt: "DeliveryBox", group: "Feature-Specific Interaction",
        caption: "Players seal and label delivery boxes for shipment."
    },
    {
        src: CommunityBoard, alt: "CommunityBoard", group: "Feature-Specific Interaction",
        caption: "Players post and read messages on the community noticeboard."
    },
    {
        src: Wave, alt: "Wave", group: "Feature-Specific Interaction",
        caption: "Players wave to NPCs to trigger friendly animations."
    },

    // GenericInteraction
    {
        src: Chop, alt: "Chop", group: "GenericInteraction",
        caption: "Players chop trees with an axe to gather wood."
    },
    {
        src: Mine, alt: "Mine", group: "GenericInteraction",
        caption: "Players mine ore from rocks with a pickaxe."
    },
    {
        src: MapStamp, alt: "MapStamp", group: "GenericInteraction",
        caption: "Players stamp the map to mark explored locations."
    },
    {
        src: TreasureBox, alt: "TreasureBox", group: "GenericInteraction",
        caption: "Players open treasure boxes to uncover rare loot."
    },
    {
        src: Shovel, alt: "Shovel", group: "GenericInteraction",
        caption: "Players dig soil with a shovel to uncover buried items."
    },
    {
        src: ShakeTree, alt: "ShakeTree", group: "GenericInteraction",
        caption: "Players shake trees to make fruits or items fall."
    },
    {
        src: ToiletDoor, alt: "ToiletDoor", group: "GenericInteraction",
        caption: "Players open toilet doors to let NPCs use facilities."
    },
    {
        src: HouseSign, alt: "HouseSign", group: "GenericInteraction",
        caption: "Players change house signs to rename buildings."
    },
    {
        src: Combine, alt: "Combine", group: "GenericInteraction",
        caption: "Players combine items in the UI to create new tools."
    },
    {
        src: Fume, alt: "Fume", group: "GenericInteraction",
        caption: "Players activate fume emitters for environmental effects."
    },
    {
        src: Repair, alt: "Repair", group: "GenericInteraction",
        caption: "Players repair broken objects using specialized tools."
    },
    {
        src: GenericInteraction, alt: "GenericInteraction", group: "GenericInteraction",
        caption: "Players interact with various objects via a unified system."
    },

    // LegacyMechanics
    {
        src: OldShovel, alt: "OldShovel", group: "LegacyMechanics",
        caption: "Prototype shovel mechanic used for early digging tests."
    },
    {
        src: OldGearbox, alt: "OldGearbox", group: "LegacyMechanics",
        caption: "Initial gearbox interaction for basic forward/reverse control."
    },
    {
        src: OldShelf, alt: "OldShelf", group: "LegacyMechanics",
        caption: "Early storage system for shelving items in prototypes."
    },
    {
        src: OldCraft, alt: "OldCraft", group: "LegacyMechanics",
        caption: "Prototype crafting UI for mixing resources in early builds."
    },
    {
        src: OldDorian, alt: "OldDorian", group: "LegacyMechanics",
        caption: "Legacy character model used to test early animations."
    },
    {
        src: FriendshipHeart, alt: "FriendshipHeart", group: "LegacyMechanics",
        caption: "Prototype collectible heart for testing social mechanics."
    },
];


// const sectionDescriptions = {
//   TrainControls: "Implemented a complete train control system, including speed, pressure, routing, and customization.",
//   Crafting: "Developed flexible crafting systems, supporting modular recipes and player customization of items.",
//   ResourceLoop: "Built the full gameplay loop of resource gathering, recycling, and exchange for player progression.",
//   ItemInteraction: "Coded various interactable items such as furniture, storage, and machines with specific player feedback.",
//   Feature-Specific Interaction: "Handled unique gameplay features and world interactions such as delivery, exploration and events.",
//   GenericInteraction: "Created a powerful, reusable interaction framework used by all harvest, quest, and pickup actions."
// };



const groups = [
    {
        key: "TrainControls", title: "Train Controls",
        description: "Train"
    },
    { key: "Crafting", title: "Crafting", description: "Crafting" },
    { key: "ResourceLoop", title: "Resource Loop", description: "Resource" },
    { key: "Feature-Specific Interaction", title: "Feature-Specific Interaction", description: "Interaction" },
    { key: "ItemInteraction", title: "Item Interaction", description: "ItemInteraction" },
    { key: "GenericInteraction", title: "Generic Interaction", description: "GenericInteraction" },
    { key: "LegacyMechanics", title: "Legacy Mechanics", description: "LegacyMechanics" },
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
                {/*<span className="overlay-arrow" />*/}
                {/*<span className="overlay-arrow" />*/}
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
  {src: CraftingResult, duration: 3000},
  {src: Seat, duration: 3100},
  {src: Seed, duration: 3500},
  {src: TrainWallpaper, duration: 3500},
  {src: TrainPaint, duration: 1900},
  {src: Shovel, duration: 4200},
  { src: PickupGarbage, duration: 2300 },
  { src: ShovelCoal, duration: 2200 },
    { src: RoutePlanner, duration: 2800 },
    { src: Shelf, duration: 3000 },
    { src: MapStamp, duration: 3000 },
    { src: Pinwheel, duration: 3000 }
];


function HeroSection({ gifs, fadeDuration = 300}) {
    const [idx, setIdx] = useState(0);
    const [phase, setPhase] = useState("visible"); // "visible" | "fadingOut" | "fadingIn"
    const imgRef = useRef();

    // 预加载所有 GIF
    useEffect(() => {
        gifs.forEach((g) => new Image().src = g.src);
    }, [gifs]);

    // 启动播放／切换逻辑
    useEffect(() => {
        let playTimer;

        if (phase === "visible") {
            // 播放完整张 GIF，然后进入淡出
            playTimer = setTimeout(() => setPhase("fadingOut"), gifs[idx].duration - fadeDuration);
        } else if (phase === "fadingOut") {
            // 在淡出阶段结束时，切到下一张并进入淡入
            playTimer = setTimeout(() => {
                setIdx((i) => (i + 1) % gifs.length);
                setPhase("fadingIn");
            }, fadeDuration);
        } else if (phase === "fadingIn") {
            // 淡入完成后回到可见阶段
            playTimer = setTimeout(() => setPhase("visible"), fadeDuration);
        }

        return () => clearTimeout(playTimer);
    }, [phase, idx, gifs, fadeDuration]);

    // 根据 phase 添加不同的 class
    const cls =
        phase === "fadingOut"
            ? "hero-img fade-out"
            : phase === "fadingIn"
                ? "hero-img fade-in"
                : "hero-img";

    return (
        <div className="locomoto-hero">
            <img
                ref={imgRef}
                src={gifs[idx].src}
                alt=""
                className={cls}
            />
            <Container fluid className="locomoto-hero-content-wrapper">
                {/* …在这里放文字、Steam iframe 等… */}
            </Container>
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
                  <a
                      key={g.key}
                      href={`#${g.key}`}
                      className="nav-link"
                      onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(g.key);
                          if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                      }}
                  >
                      {g.title}
                  </a>
              ))}
          </nav>

      {/* 主体内容 */}
      

         

          <main className="locomoto-main">
              <div className="site-container">
                  <HeroSection gifs={heroGifs} />
              </div>
              
              <div className="site-container locomoto-intro left-align">
                  <p className="home-about-body white-text">
                      <b className="purple">Locomoto </b>
                      is a cozy life-simulation adventure game,
                      which launched on 
                      <a href="https://store.steampowered.com/app/2328650/Locomoto/" className="purple bold-link"> Steam </a> 
                      in April 2025 and will release on  <a href="https://eu.store.thqnordic.com/en/Locomoto-NSW/9120131602940" className="purple bold-link">Nintendo Switch</a> in upcoming 2025. As the <b className="purple">Gameplay Programmer</b>, I was responsible for implementing and refining most of the core gameplay mechanics and systems—including train controls, NPC passenger interactions, resource loops, crafting systems, and various customizable interactive items and features. Throughout the project, I worked closely and proactively with designers and artists, rapidly prototyping features, building specialized tools to streamline our development process, and iteratively polishing gameplay elements to deliver a relaxing and engaging player experience.
                  </p>

                  <p className="home-about-body white-text">
                      My approach to programming emphasizes high-quality, maintainable, and extensible code. I proactively minimized bugs through rigorous testing and immediate fixes, and structured my implementations to ensure flexibility, allowing substantial feature changes with minimal code adjustments. Additionally, I effectively utilized industry-standard Unity plugins including Cinemachine, DoTween, Dialogue System, Behavior Designer, Easy Save, More Mountains Feedback, Doozy UI System and Grid Placement System, significantly enhancing development efficiency and gameplay polish.
                  </p>

                  <p className="home-about-body white-text">
                      Scroll down to explore some of the gameplay systems, features, and tools I helped bring to life.
                  </p>
              </div>
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
                    description={g.description}
              gifs={locomotoGifs.filter((x) => x.group === g.key)}
            />
          </section>
        ))}
      </main>
    </div>
  )
}

export default Locomoto;

