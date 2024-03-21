import { getDataString } from "./utils/06-utils"


const path = `${__dirname}/../../advent-2022/data/datastream-buffer.txt`


function findPacketMarker(data: string): number | void {

  for (let i = 0; i < data.length; i++) {

    const packetMarker: string[] = []

    for (let j = 0; j < 4; j++) {
      packetMarker.push(data[i + j])
    }

    const uniqueChars = new Set(packetMarker)

    if (packetMarker.length === uniqueChars.size) {
      return i + 4
    }
  }
}


getDataString(path)
  .then((data) => {
    return findPacketMarker(data)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
