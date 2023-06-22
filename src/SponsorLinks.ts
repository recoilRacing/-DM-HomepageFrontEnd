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
import Wilhelm_Stemmer_Stiftung from "./assets/Sponsors/Wilhelm-Stemmer-Stiftung.jpg";
import ChancenDurchBildung from "./assets/Sponsors/ChancenDurchBildung.png";

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
  "FNZ",
  "Weineck",
] as const;
export type Sponsors = (typeof sponsorsArray)[number];

export type SponsorObjectType = {
  [K in Sponsors]: any;
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
  FNZ: FNZ,
  Wilhelm_Stemmer_Stiftung: Wilhelm_Stemmer_Stiftung,
  ChancenDurchBildung: ChancenDurchBildung,
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
  FNZ: "https://www.fnz.com/",
  Wilhelm_Stemmer_Stiftung: "https://www.wilhelm-stemmer-stiftung.de/",
  ChancenDurchBildung: "https://www.chancen-durch-bildung.de/",
};

//Yet to be confirmed
const KultusministeriumURL = "";
const max_und_blala_stifgung = "";

export { Images, URLs };
