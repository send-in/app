"use client"

// #region imports
import {
	useEffect,
	useState
} from "react"
// #endregion

type TimeProgressProps = {
	createdAt: Date | string
	scheduledTime: Date | string
	size?: number
}

const TimeProgress = ({
	createdAt,
	scheduledTime,
	size = 20
}: TimeProgressProps) => {

	const [progress, setProgress] = useState<number>(0)
	const radius = size / 2
	const angle = (progress / 100) * 360
	const radians = (angle - 90) * (Math.PI / 180)
	const x = radius + radius * Math.cos(radians)
	const y = radius + radius * Math.sin(radians)
	const largeArc = angle > 180 ? 1 : 0

	const pathData = `
		M ${radius} ${radius}
		L ${radius} 0
		A ${radius} ${radius} 0 ${largeArc} 1 ${x} ${y}
		Z
	`

	useEffect(() => {
		const start =
			typeof createdAt === "string"
				? new Date(createdAt).getTime()
				: createdAt.getTime()

		const target =
			typeof scheduledTime === "string"
				? new Date(scheduledTime).getTime()
				: scheduledTime.getTime()

		const total = target - start

		if (total <= 0) {
			setProgress(100)
			return
		}

		const updateProgress = () => {
			const current = Date.now()
			const elapsed = current - start
			const percentage = Math.min(100, (elapsed / total) * 100)
			setProgress(percentage)
		}

		updateProgress()
		const interval = setInterval(updateProgress, 1000)

		return () => clearInterval(interval)
	}, [
		createdAt,
		scheduledTime
	])

	return (
		<svg
			height={size}
			width={size}
			className="
				transition-colors
				fill-white
				group-hover:fill-blue-100
				group-active:fill-blue-200
				ease-in-out delay-100
			"
		>
			<circle
				cx={radius}
				cy={radius}
				r={radius - 1}
				strokeWidth={2}
				className="
					transition-colors
					stroke-blue-100
					group-hover:stroke-white
					ease-in-out delay-100
				"
			/>
			{progress > 0 && (
				<path
					d={pathData}
					className="
						transition-colors
						fill-blue-100
						group-hover:fill-white
						ease-in-out delay-100
					"
				/>
			)}
		</svg>
	)
}

export default TimeProgress
