import { getDataString } from "./utils/06-utils"


const path = `${__dirname}/../advent-2022/data/datastream-buffer.txt`


function findMessageMarker(data: string): number | void {

  for (let i = 0; i < data.length; i++) {

    const messageMarker: string[] = []

    for (let j = 0; j < 14; j++) {
      messageMarker.push(data[i + j])
    }

    const uniqueChars = new Set(messageMarker)

    if (messageMarker.length === uniqueChars.size) {
      return i + 14
    }
  }
}


getDataString(path)
  .then((data) => {
    return findMessageMarker(data)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
