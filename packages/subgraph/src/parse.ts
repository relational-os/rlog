// TODO: import these directly from the other package

export function getType(addr: string): string {
  if (addr == "0xEc1F9236E395A9C0B22eE79aEFB570c999864c6A") return "collection";
  if (addr == "0x901a7da3240b2b60181ec6a0dc58cb05f0f20dce") return "tag";
  if (addr == "0xb8A4C0Fb6Fb8028720c4272e70bFF3dDa94A5aA8") return "log";
  return "";
}
