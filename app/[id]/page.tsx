import {existsSync, promises as fs} from "fs"

import SkinView from "./SkinView"

const FILE_PATH = process.cwd() + "/cache.json"

const getSkinData = async (id: number) => {
	if (existsSync(FILE_PATH)) {
		const file = await fs.readFile(FILE_PATH, "utf-8")
		const json = await JSON.parse(file)
		const data = json[id]
		return data
	}

	return undefined
}

const Page = async ({params}: {params: {id: number}}) => {
	const skin: string | undefined = await getSkinData(params.id)

	if (skin === undefined) {
		return (
			<main>
				<h1>Skin Not Found</h1>
			</main>
		)
	}

	return (
		<main>
			<SkinView b64={skin} />
		</main>
	)
}

export default Page
