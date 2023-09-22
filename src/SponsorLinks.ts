import TH from "./assets/Sponsors/TH-Nürnberg.png";
import CHING from "./assets/Sponsors/CHING.png";
import FAU from "./assets/Sponsors/FAU.png";
import Fraunhofer from "./assets/Sponsors/Fraunhofer.jpg";
import Puma from "./assets/Sponsors/PumaTransparentBackground.png";
import Siemens from "./assets/Sponsors/Siemens.png";
import Myonic from "./assets/Sponsors/Myonic.png";
import Print4You from "./assets/Sponsors/print4you2.jpg";
import Weineck from "./assets/Sponsors/Weineck.png";
import Tintschl from "./assets/Sponsors/TintschlAG.svg";
import FNZ from "./assets/Sponsors/FNZ.png";
import Becker from "./assets/Sponsors/Becker.jpg";
import Wilhelm_Stemmer_Stiftung from "./assets/Sponsors/Wilhelm-Stemmer-Stiftung.jpg";
import ChancenDurchBildung from "./assets/Sponsors/ChancenDurchBildung.png";
import RotaryClub from "./assets/Sponsors/new/rotary-club.png";
import Elsner_Stiftung from "./assets/Sponsors/new/Elsner_Stiftung.png";
import F3G from "./assets/Sponsors/new/F3G.jpg";
import KM from "./assets/Sponsors/new/KM.png";
import SKZ from "./assets/Sponsors/new/SKZ.jpg";
import StadtErlangen from "./assets/Sponsors/new/StadtErlangen.png";
import Schaeffler from "./assets/Sponsors/new/Schaeffler.jpg";
import INtego from "./assets/Sponsors/new/INtego.jpg";
import ThermoFischer from "./assets/Sponsors/new/ThermoFischer.jpg";

export type Sponsors = (typeof sponsorsArray)[number];
export type SponsorObjectType = {
  [K in Sponsors]: any;
};
export type SponsorType =
  | "Premium"
  | "Academical"
  | "Value"
  | "Gold"
  | "Silver"
  | "Queue";
export const sponsorsArray = [
  "Siemens",
  "Tintschl",
  "Wilhelm_Stemmer_Stiftung",
  "CHING",
  "ChancenDurchBildung",
  "FAU",
  "Fraunhofer",
  "Myonic",
  "Puma",
  "Print4You",
  "TH",
  // "FNZ",
  "Weineck",
  "Becker",
  "Elsner_Stiftung",
  "Rotary_Club",
  "F3G",
  "KM",
  "SKZ",
  "StadtErlangen",
  "Schaeffler",
  "INtego",
  "ThermoFischer",
] as const;

export type SponsorTypeType = {
  [K in Sponsors]: SponsorType;
};

const Images: SponsorObjectType = {
  TH: TH,
  CHING: CHING,
  FAU: FAU,
  Fraunhofer: Fraunhofer,
  Puma: Puma,
  Siemens: Siemens,
  Myonic: Myonic,
  Print4You: Print4You,
  Weineck: Weineck,
  Tintschl: Tintschl,
  // FNZ: FNZ,
  Wilhelm_Stemmer_Stiftung: Wilhelm_Stemmer_Stiftung,
  ChancenDurchBildung: ChancenDurchBildung,
  Becker: Becker,
  Elsner_Stiftung: Elsner_Stiftung,
  Rotary_Club: RotaryClub,
  F3G: F3G,
  KM: KM,
  SKZ: SKZ,
  StadtErlangen: StadtErlangen,
  Schaeffler: Schaeffler,
  INtego: INtego,
  ThermoFischer: ThermoFischer,
};

const URLs: SponsorObjectType = {
  TH: "https://www.th-nuernberg.de/",
  CHING: "https://www.ching-coatings.com/de/",
  FAU: "https://www.fau.de/",
  Fraunhofer: "https://www.fraunhofer.de/",
  Puma: "https://puma.com/",
  Siemens: "https://siemens.com/",
  Myonic: "https://myonic.com/",
  Print4You: "https://www.xxlprint4you.de/",
  Weineck: "https://weineck.info/",
  Tintschl: "https://www.tintschl.de/",
  // FNZ: "https://www.fnz.com/",
  Wilhelm_Stemmer_Stiftung: "https://www.wilhelm-stemmer-stiftung.de/",
  ChancenDurchBildung: "https://www.chancen-durch-bildung.de/",
  Becker: "https://www.becker-metals.com/en.html",
  Elsner_Stiftung: "https://elsner-stiftung.de/",
  Rotary_Club: "https://erlangen.rotary.de/",
  F3G: "https://www.familienservice.fau.de/f%C2%B3g-verbund/",
  KM: "https://www.km.bayern.de/",
  SKZ: "https://www.skz.de/",
  StadtErlangen: "https://erlangen.de/en",
  Schaeffler: "https://www.schaeffler.de/en/",
  INtego: "https://intego.de/de/",
  ThermoFischer: "https://www.thermofisher.com/de/de/home.html",
};

const SponsorTypes: SponsorTypeType = {
  TH: "Academical",
  CHING: "Queue",
  FAU: "Academical",
  Fraunhofer: "Academical",
  Puma: "Gold",
  Siemens: "Premium",
  Myonic: "Silver",
  Print4You: "Silver",
  Weineck: "Queue",
  Tintschl: "Gold",
  // FNZ: "Silver",
  Wilhelm_Stemmer_Stiftung: "Value",
  ChancenDurchBildung: "Value",
  Becker: "Gold",
  Schaeffler: "Gold",
  StadtErlangen: "Gold",
  SKZ: "Academical",
  ThermoFischer: "Silver",
  Elsner_Stiftung: "Value",
  Rotary_Club: "Value",
  F3G: "Value",
  KM: "Value",
  INtego: "Silver",
};

//Yet to be confirmed
const KultusministeriumURL = "";
const max_und_blala_stifgung = "";

export { Images, URLs, SponsorTypes };
