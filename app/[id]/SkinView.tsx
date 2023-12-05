"use client"

import {useEffect, useRef} from "react"
import {SkinViewer} from "skinview3d"

const SkinView = ({b64}: {b64: string}) => {
	const ref = useRef<HTMLCanvasElement>()

	useEffect(() => {
		const width = window.innerWidth
		const height = 0.8 * window.innerHeight

		let skinViewer = new SkinViewer({
			canvas: ref.current,
			width: width,
			height: height,
			skin: "data:image/png;base64," + b64,
		})
	}, [])

	// @ts-ignore
	return <canvas ref={ref}></canvas>
}

export default SkinView
