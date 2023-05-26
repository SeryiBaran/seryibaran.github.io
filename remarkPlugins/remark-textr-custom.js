export default function remarkTextrCustom(input) {
  return input
    .replace(/\.{3,}/gim, "…")
    .replace(/\?\.{2,}/gim, "?..")
    .replace(/!\.{2,}/gim, "!..")
    .replace(/\(c\)/gim, "©")
    .replace(/\(r\)/gim, "®")
    .replace(/\(tm\)/gim, "™")
    .replace(/\+-/gim, "±")
    .replace(/\(tm\)/gim, "™")
    .replace(/!{3,}/gim, "!!!")
    .replace(/\?{3,}/gim, "???")
    .replace(/,+/gim, ",")
    .replace(/---/gim, "—");
}
