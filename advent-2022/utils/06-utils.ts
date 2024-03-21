import fs from "fs/promises"


export const getDataString = async (path: string): Promise<string> => {

  const data = await fs.readFile(path)

  return data.toString()
}
