import { CardData, TagData } from "./models"

/* Returns descending ordered TagData[] */
function calculateTags(cardsArray: CardData[]): TagData[] {
  const counter: any = {}

  for (const card of cardsArray) {
    for (const tag of card.tags) {
      if (tag in counter) {
        counter[tag] += 1
      } else {
        counter[tag] = 1
      }
    }
  }

  const pairs = Object.keys(counter).map((key) => ({
    name: key,
    count: counter[key],
  }))

  pairs.sort((a, b) => b.count - a.count)

  return pairs
}

export { calculateTags }
