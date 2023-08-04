import type { Artist } from "@/types"

export async function getArtists(): Promise<Artist[]> {
  return [
    {
      id: 1,
      name: "The Beatles",
      avatar: "https://doodleipsum.com/200x200/avatar-2",
      cover: "https://picsum.photos/600/200"
    },
    {
      id: 2,
      name: "The Rolling Stones",
      avatar: "https://doodleipsum.com/200x200/avatar-3",
      cover: "https://picsum.photos/600/200"
    },
    {
      id: 3,
      name: "The Who",
      avatar: "https://doodleipsum.com/200x200/avatar-4",
      cover: "https://picsum.photos/600/200"
    },
    {
      id: 4,
      name: "The Kinks",
      avatar: "https://doodleipsum.com/200x200/avatar-5",
      cover: "https://picsum.photos/600/200"
    }
  ]
}
