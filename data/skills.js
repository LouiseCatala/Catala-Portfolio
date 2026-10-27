import { capabilities, stackGroups, tools } from "@/data/content"
export const skillCategories = [
{ id:"web", title:"Web Development & Databases", subtitle:"Interfaces / services / data", text:capabilities[0].text, groups:stackGroups.slice(0,3), featured:["React","TypeScript","Python","HTML/CSS","JavaScript","PHP","Node.js","MySQL","Firebase","API's"] },
{ id:"embedded", title:"Embedded Systems & IoT", subtitle:"Hardware / software / firmware", text:capabilities[1].text, groups:[{title:"Hardware",items:["ESP32","Arduino","Raspberry Pi","Sensors","Microcontrollers","Actuators"]},{title:"Software",items:["Python","HTML/CSS","JavaScript","TypeScript","PHP","Java","C++","Arduino IDE","Circuit Design","KiCad","Proteus"]},{title:"Firmware",items:["C++","Linux","Debian 13"]}], featured:["ESP32","Arduino","Raspberry Pi","Arduino IDE","C++","Linux","Debian 13"] },
{ id:"design", title:"Design & Engineering Tools", subtitle:"Draft / simulate / prototype", text:"Drafting with AutoCAD, designing circuits, and simulating electronics for physical prototypes.", groups:[{title:"Drafting & circuit prototyping",items:["AutoCAD","Circuit Design","KiCad","Proteus","Soldering"]}], featured:["AutoCAD","KiCad","Proteus","Circuit Design"] },
{ id:"systems", title:"Computer Systems & Technical Support", subtitle:"Hardware / maintenance / kiosks", text:capabilities[2].text, groups:[{title:"Hardware care & interfaces",items:capabilities[2].tags},stackGroups[4]], featured:["Debian 13","Intel NUC","PC & Laptop Cleaning","Kiosk Setup","Touchscreen Interfaces"] }
]
export const familiarSkills = tools
export const serviceSkills = capabilities[3]
export const engineeringToolkit = [...new Set([...stackGroups.flatMap(group => group.items), ...skillCategories.flatMap(category => category.groups.flatMap(group => group.items)), ...capabilities[1].tags, ...capabilities[2].tags, ...tools])]
