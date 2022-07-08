// TODO: import these directly from the other package

export function getType(addr: string): string {
  if (addr == "0x52318aea70b497c8d3cc83f985991370cc9e297b") return "comment";
  if (addr == "0x9afd94b0d13b3f360eacd44ea856b1da669cd15e") return "page";
  if (addr == "0x2ac2436b1fa3f9ff3d058fa66bbe695d371617f7") return "tag";
  if (addr == "0x7c376918cacf56576db22921b780f2c220b28c52") return "log";
  return "";
}
