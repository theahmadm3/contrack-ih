import flybird from '../assets/images/flybird-logo.png';   // 665×138 — wide text logo
import kdin from '../assets/images/kdin-logo.png';      // 463×226 — square-ish
import luville from '../assets/images/luville-logo.png';   // 547×246 — square-ish
import moh40 from '../assets/images/moh-40-logo.png';    // 209×67  — small wide
import zari from '../assets/images/zari-logo.png';      // 633×173 — wide text logo

// maxW controls the rendered width relative to the cell.
// Wider/flatter logos get a larger maxW so they don't look tiny.
// Taller logos get a smaller maxW so they don't overflow vertically.
export const clients = [
  { name: 'ZARI.ng', logo: zari, sector: 'E-commerce', maxW: 'max-w-[140px]' },
  { name: 'FlyBird', logo: flybird, sector: 'Aviation', maxW: 'max-w-[150px]' },
  { name: 'Moh40', logo: moh40, sector: 'Logistics', maxW: 'max-w-[110px]' },
  { name: 'KDIN', logo: kdin, sector: 'NGO', maxW: 'max-w-[120px]' },
  { name: 'Luville Global', logo: luville, sector: 'Corporate', maxW: 'max-w-[130px]' },
];