import {existsSync, promises as fs} from "fs"
import {NextRequest, NextResponse} from "next/server"

const FILE_PATH = process.cwd() + "/cache.json"

export async function POST(req: NextRequest) {
	const {b64}: {b64?: string} = await req.json()
	if (!b64) {
		return new NextResponse(JSON.stringify({}), {status: 400})
	}

	const id = Date.now()

	let json = JSON.parse("{}")
	if (existsSync(FILE_PATH)) {
		const file = await fs.readFile(FILE_PATH, "utf-8")
		json = await JSON.parse(file)
	}

	json[id] = b64
	await fs.writeFile(FILE_PATH, JSON.stringify(json), "utf-8")
	return new NextResponse(JSON.stringify({id: id}), {status: 200})
}
