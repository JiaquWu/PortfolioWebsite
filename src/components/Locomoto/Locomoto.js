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
        caption: "Players lay out their train’s route by placing pins on the map."
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
        caption: "Overpressure can trigger a dramatic furnace explosion in the engine room."
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
        caption: "The newly crafted item appears once the recipe requirements are met, also the color of each part of the item is based on the resource used"
    },
    {
        src: FancySeatCraftingPattern, alt: "FancySeatCraftingPattern", group: "Crafting",
        caption: "A custom editor for designers to create crafting patterns, this one is for fancy seat in gifs above"
    },
    {
        src: FancySeatIV, alt: "FancySeatIV", group: "Crafting",
        caption: "Some editor tools for designers and artists to easily set up the customiziable parts on the item"
    },

    // ResourceLoop
    {
        src: PickupGarbage, alt: "PickupGarbage", group: "ResourceLoop",
        caption: "Players collect garbages placed in the world and left by NPCs"
    },
    {
        src: GarbageToken, alt: "GarbageToken", group: "ResourceLoop",
        caption: "Player get tokens from recycling garbages"
    },
    {
        src: NPCService, alt: "NPCService", group: "ResourceLoop",
        caption: "Player get token from serving NPCs with snacks while they travelling"
    },
    {
        src: NPCLeaveToken, alt: "NPCLeaveToken", group: "ResourceLoop",
        caption: "After arriving at their destinations, NPCs drop tokens that players can pick up."
    },
    {
        src: Delivery1, alt: "Delivery1", group: "ResourceLoop",
        caption: "Delivery parcels to random destinations spawn randomly for player to collect."
    },
    {
        src: Delivery2, alt: "Delivery2", group: "ResourceLoop",
        caption: "Player get token from delivering parcels to their target destinations"
    },
    {
        src: TokenExchange, alt: "TokenExchange", group: "ResourceLoop",
        caption: "Players exchange tokens for different resources at different token machines"
    },
    {
        src: BreakInteraction, alt: "BreakInteraction", group: "ResourceLoop",
        caption: "Players get all resources used for crafting after breaking the furniture"
    },

    // ItemInteraction
    {
        src: HotCocoaMachine, alt: "HotCocoaMachine", group: "ItemInteraction",
        caption: "Players get service items to serve NPCs or enjoy it themselves"
    },
    {
        src: Pinwheel, alt: "Pinwheel", group: "ItemInteraction",
        caption: "Players spin the pinwheels."
    },
    {
        src: Seat, alt: "Seat", group: "ItemInteraction",
        caption: "Players and NPC sit on the seat"
    },
    {
        src: TwoGarbageBags, alt: "TwoGarbageBags", group: "ItemInteraction",
        caption: "Players interact with garbage bags in different ways"
    },
    {
        src: Shelf, alt: "Shelf", group: "ItemInteraction",
        caption: "Players store items on shelves with intuitive and easy controls"
    },
    {
        src: ToolStorage, alt: "ToolStorage", group: "ItemInteraction",
        caption: "Players use tool storage to access tools owned by them."
    },
    {
        src: TableFold, alt: "TableFold", group: "ItemInteraction",
        caption: "Players fold and unfold tables."
    },
    {
        src: WallpaperPaintStorage, alt: "WallpaperPaintStorage", group: "ItemInteraction",
        caption: "Players use wallpaper and paint storage to easily access wallpaper and paint buckets"
    },

    // Feature-Specific Interaction
    {
        src: TrainPaint, alt: "TrainPaint", group: "Feature-Specific Interaction",
        caption: "Players apply new paint schemes to personalize the outside train."
    },
    {
        src: TrainWallpaper, alt: "TrainWallpaper", group: "Feature-Specific Interaction",
        caption: "Players decorate the train’s interior with new wallpapers."
    },
    {
        src: Fishing, alt: "Fishing", group: "Feature-Specific Interaction",
        caption: "Players play fishing mini-game and get fish and other items from the water"
    },
    {
        src: Seed, alt: "Seed", group: "Feature-Specific Interaction",
        caption: "Players plant seeds in slots and collect flowers"
    },
    {
        src: DeliveryBox, alt: "DeliveryBox", group: "Feature-Specific Interaction",
        caption: "Players deliver required items into delivery box to progress quest"
    },
    {
        src: CommunityBoard, alt: "CommunityBoard", group: "Feature-Specific Interaction",
        caption: "Players can get new quests on the community board when progressing the game."
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
        caption: "Players use the map stamper to unlock new stations on the map"
    },
    {
        src: TreasureBox, alt: "TreasureBox", group: "GenericInteraction",
        caption: "Players open treasure boxes with keys found in the station to uncover rare loot."
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
        caption: "Players open and close toilet doors."
    },
    {
        src: HouseSign, alt: "HouseSign", group: "GenericInteraction",
        caption: "Players read house sign to know more information about it."
    },
    {
        src: Combine, alt: "Combine", group: "GenericInteraction",
        caption: "Players combine items to solve little puzzle made for the quest"
    },
    {
        src: Fume, alt: "Fume", group: "GenericInteraction",
        caption: "Players collect air sample with the jar."
    },
    {
        src: Repair, alt: "Repair", group: "GenericInteraction",
        caption: "Players repair broken objects using specialized tools."
    },
    {
        src: GenericInteraction, alt: "GenericInteraction", group: "GenericInteraction",
        caption: "A glimpse of what generic interaction looks like in editor, this one is made for mining interactions"
    },

    // LegacyMechanics
    {
        src: OldShovel, alt: "OldShovel", group: "LegacyMechanics",
        caption: "A shovel mini-game in furnace interaction, throwing coal with multipliers and good timing gain more pressure!"
    },
    {
        src: OldGearbox, alt: "OldGearbox", group: "LegacyMechanics",
        caption: "Initial gearbox interaction with more train controls"
    },
    {
        src: OldShelf, alt: "OldShelf", group: "LegacyMechanics",
        caption: "Early shelf interaction for storing items."
    },
    {
        src: OldCraft, alt: "OldCraft", group: "LegacyMechanics",
        caption: "The first iteration of crafting interaction."
    },
    {
        src: OldDorian, alt: "OldDorian", group: "LegacyMechanics",
        caption: "Unfinished trading interaction with certain NPCs in early development"
    },
    {
        src: FriendshipHeart, alt: "FriendshipHeart", group: "LegacyMechanics",
        caption: "Heart particles when NPC gain more friendship points, one of the first things I made in the game"
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
        description:
            (
                <div className="gif-card-description" >
                    <p>Train is a core part of Locomoto, players can drive it around the world as they want.
                    The train control system was the first gameplay module I took on after joining the team—while the basic framework was already in place, I implemented and refined every new feature through multiple iterations to deliver a cozy, polished driving experience.
 </p>                
                      <p><strong>Main Features & My Contributions:</strong></p>
                    <ul>
                    <li>Built an extendable pressure, speed, and train control system that underpins multiple gameplay interactions including furnace interaction, gearbox interaction, whilstle interaction, coal interaction, etc. Ensuring stability and flexibility so I could rapidly implement subsequent changes.
                    </li>
                    <li>Utilized AI navigation, Timeline, and other Unity plugins and components, collaborate closely with designers and animator for creating and refining smooth and satisfying interaction in all train control related interactions.
</li></ul>
                </div>
            )
    },
    { key: "Crafting", title: "Crafting", 
        description:
            (
                <div className="gif-card-description" >
                    <p>Crafting in Locomoto is the main way for players to get furniture, which are an essential part of customization in the game.
                    We had at least three different ways of crafting at different stage of development, while we finally chose to go with this Minecraft-like crafting after I made a prototype of it. </p>
                      <p><strong>Main Features & My Contributions:</strong></p>
                     <ul>
                        <li>Created Minecraft-like pattern-based crafting system with highly customizable items. Each furniture and craftble items in Locomoto have an unique crafting pattern,
                    and different parts in a furniture can have different colors depending on which resources player used in crafting. 
                    </li>

                    <li>Implemented unity editor tools for designers and artists to easily create patterns and deicde which parts of furniture can be customizable with which type of resource.
                    </li>
                    <li>Utilized bitwise operations in crafting system, which improved computational efficiency and reduced performance cost.
                    </li>
                    <li>Collaborated closely with UI programmer and designers to ensure the smoothness and enjoyment in crafting interaction.
                    </li> </ul>

                </div>
            )
     },
    { key: "ResourceLoop", title: "Resource Loop", 
        description:
            (
                <div className="gif-card-description" >
                    <p>Resource loop is a core gameplay loop in Locomoto. There are a lot of ways for players to get resources, but apart from finding preplaced resources in stations and
                        getting them from NPC quests, the repetitive way is to drive NPC to their destinations and serve them during travelling, recycle garbage left by NPCs, and delivery parcels.
 </p>                
                      <p><strong>Main Features & My Contributions:</strong></p>
                    <ul>
                    <li>
                         Implemented recycling, NPC-seat interactions, delivery-station workflows, NPC preference handling, resource exchanges, and breaking interactions
                         — building on our existing NPC state machine, dialogue, station, item, and save systems, and iterating each feature for seamless, stable integration.
                    </li>
                    {/* <li></li> */}
</ul>
                </div>
            )
    },
    { key: "Feature-Specific Interaction", title: "Feature-Specific Interaction", 
        description:
            (
                <div className="gif-card-description" >
                    <p>
                        These interactions in Locomoto are self-contained gameplay mechanics, each with its own rules and logic. While they first appeared to serve particular quest requirements, over time they were refined into fully-fledged features in their own right.
 </p>                
                      <p><strong>Main Features & My Contributions:</strong></p>
                    <ul>
                    <li>
                         Prototyped gameplay features rapidly—train customization, fishing, planting, item delivery, quest-board mechanics, and NPC interactions—to meet quest needs, then developed each into a complete, standalone gameplay mechanic
                    </li>
                    <li>
                        Built flexible Unity editor tools so designers and artists could configure every detail without code, such as defining delivery point conditions, mapping paint bucket colors and materials to wagon parts, specifying fish to certain lakes, setting lavender seed growth timers and vase rewards, and more.
                    </li>
</ul>
                </div>
            )
     },
    { key: "ItemInteraction", title: "Item Interaction", 
        description:
            (
                <div className="gif-card-description" >
                    <p>
                        Locomoto features a wide variety of interactive items, each with its own special function. Below are a few examples that I implemented.
 </p>                
                      <p><strong>Main Features & My Contributions:</strong></p>
                    <ul>
                    <li>
                         Implemented a wide range of interactive items to meet specific gameplay needs—seats that support both player and NPC seating; foldable tables; machines dispensing various items; consumable foods and beverages; garbage bags with multiple ways to store and retrieve garbage ; dedicated tool, paint-bucket, and wallpaper storage containers; and spin-up pinwheels.
                    </li>
                    <li>
                        Engaged with other developers to refine every detail—iterating intensively (for example, finalizing the seating interaction to everyone's satisfaction just one week before launch) so that each item interaction feels intuitive, comfortable, and cohesive in the final game.
                    </li>
                    <li>
                        Abstracted common interaction behaviors into reusable modules, to improve code quality and reducing workload. For example, all circular menu interactions leverage the same underlying functions.
                    </li>
</ul>
                </div>
            )
     },
    { key: "GenericInteraction", title: "Generic Interaction", 
        description:
            (
                <div className="gif-card-description" >
                    <p>
                        Locomoto includes a variety of fun, diverse interactions that don't each need their own system: everything from chopping and mining to map-stamping and chest-opening, as shown in the GIFs below, is powered by our single generic-interaction framework.
 </p>                
                      <p><strong>Main Features & My Contributions:</strong></p>
                    <ul>
                    <li>
                         Developed and continuously refined the generic interaction system into a highly extensible framework, supporting behaviors from chopping and mining to door toggles and tree-shakes that drop items.
                    </li>
                    <li>
                        Built editor tools that let designers easily implement gameplay features—setting quest states, triggering dialogue, granting rewards, spawning items, and playing feedback effects, while also configuring interaction activation conditions, animation durations, respawn timers, and more. This empowers them to create a wide variety of in-game interactions without writing a single line of code.
                    </li>
                    
</ul>
                </div>
            )
     },
    { key: "LegacyMechanics", title: "Legacy Mechanics", 
        description:
            (
                <div className="gif-card-description" >
                    <p>
                        Throughout the development of Locomoto we experimented with and refined many gameplay systems—several of my early prototypes didn't make the final cut. Here's a glimpse at some of the mechanics we ultimately set aside.
 </p>                
                     
            
                </div>
            )
     },
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
                      in April 2025 and will release on  <a href="https://eu.store.thqnordic.com/en/Locomoto-NSW/9120131602940" className="purple bold-link">Nintendo Switch</a> in upcoming 2025. As the <b className="purple">Gameplay Programmer</b>, I was responsible for implementing and refining most of the core gameplay mechanics and systems—including train controls, NPC passenger interactions, resource loops, crafting systems, and various customizable interactive items and features in Unity and C#. Throughout the project, I worked closely and proactively with designers and artists, rapidly prototyping features, building specialized tools to streamline our development process, and iteratively polishing gameplay elements to deliver a relaxing and engaging player experience.
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

