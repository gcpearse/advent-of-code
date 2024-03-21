import fs from "fs/promises"


export const getData = async (path: string): Promise<string[]> => {
  
  const data = await fs.readFile(path)
  
  return data.toString().split("\n")
}
