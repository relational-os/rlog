// TODO: import these directly from the other package

export function getType(addr: string): string {
  const a = addr.toLowerCase();
  if (a == "0xEc1F9236E395A9C0B22eE79aEFB570c999864c6A".toLowerCase())
    return "collection";
  if (a == "0xdaD0D757C142bE18BEc9c1f57A606AAE737d9E35".toLowerCase())
    return "tag";
  if (a == "0x306459A7599dabd032ECb31c0d6F9fE277830297".toLowerCase())
    return "log";
  return "";
}
