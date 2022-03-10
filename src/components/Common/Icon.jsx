import React from 'react'

const Icon = (props) => {

	const setIcon = (icon) => {
		switch (icon) {
			case 'chevronDown':
				return (
					<path
						d="m21.344 4.813-9.38 9.38a.655.655 0 0 1-.928 0l-9.38-9.38"
						stroke={props.stroke}
						strokeWidth={1.5}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				)
			case 'lens':
				return (
					<>
						<path
							clipRule="evenodd"
							d="M14.54 18.803A8.056 8.056 0 1 0 8.24 3.975a8.056 8.056 0 0 0 6.301 14.828Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="m17.085 17.084 6.248 6.25"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>)
			case 'workshops':
				return (
					<>
						<path
							d="M7.5 3.767 5.934 1.418a1.5 1.5 0 0 0-2.59.161L.75 6.767h12l-2.069-4.138a1.5 1.5 0 0 0-2.4-.39l-1.1 1.053"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="m20.25 3-3 8.25h6l-3-8.25Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20.25 11.25v3"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="m3.75 12-3 8.25h6l-3-8.25Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3.75 20.25v3M19.5 19.7a4.818 4.818 0 0 1 1.27 2.056M15 17.848c.24.058.489.109.749.152a9.26 9.26 0 0 1 1.507.376M10.7 14.667c.323.643.764 1.22 1.3 1.7M9.75 9.75a16.55 16.55 0 0 0 .087 1.75"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>
				)
			case 'environments':
				return (
					<>
						<path
							clipRule="evenodd"
							d="M.75 18.75h6v4.5h-5a1 1 0 0 1-1-1v-3.5Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.164 14.25H2.25a1.5 1.5 0 0 0-1.5 1.5v3h17.366"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="M6.75 18.75h6v3.5a1 1 0 0 1-1 1h-5v-4.5ZM1.75.75h4a1 1 0 0 1 1 1v3.5h-6v-3.5a1 1 0 0 1 1-1ZM13.75.75h4a1 1 0 0 1 1 1v3.5h-6v-3.5a1 1 0 0 1 1-1ZM6.75 9.75h6v4.5h-6v-4.5Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="M15.714 7.37a1.5 1.5 0 0 1 1.158-1.777l1.468-.31a1.5 1.5 0 0 1 1.777 1.158l3.1 14.69a1.5 1.5 0 0 1-1.158 1.777l-1.468.31a1.5 1.5 0 0 1-1.777-1.158l-3.1-14.69Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M18.75 5.25h-18v3a1.5 1.5 0 0 0 1.5 1.5h13.965"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>
				)
			case 'nooks':
				return (
					<>
						<path
							clipRule="evenodd"
							d="M.75 2.25a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v19.5a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="M17.238 20.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.75 20.25l3-6 3 6h-6v0ZM3.75 4.5h6v6h-6v-6ZM17.267 3.992l.867 2.289h1.687a.414.414 0 0 1 .292.719l-1.465 1.024.812 1.864a.442.442 0 0 1-.63.552l-1.961-1.1-1.961 1.1a.442.442 0 0 1-.63-.552l.812-1.864L13.625 7a.413.413 0 0 1 .29-.722H15.6l.868-2.289a.448.448 0 0 1 .799.003Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>
				)
			case 'routines':
				return (
					<>
						<path
							d="M6.75 12.75h.75a.75.75 0 0 1 .75.75v5.25M6.75 18.75h3M13.832 12.75h1.918a.751.751 0 0 1 .7 1.014l-1.87 4.986"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="M.75 5.25a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v16.5a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V5.25Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M.75 9.75h22.5M6.75 6V.75M17.25 6V.75"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>
				)
			case 'settings':
				return (
					<>
						<path
							d="M12.735 15.75h6M5.235 15.75h3"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="M10.485 18a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14.235 8.25h-9"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							clipRule="evenodd"
							d="M16.485 10.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5v0Z"
							stroke={props.stroke}
							strokeWidth={1.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>
				)
			case 'heart':
				return (
					<>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.35 3.725a4.135 4.135 0 0 1 3.105-1.44c2.125 0 3.795 1.667 3.795 3.788 0 2.601-2.342 4.72-5.89 7.932l-.01.008-1 .91-1-.903-.028-.024C3.784 10.786 1.45 8.669 1.45 6.073c0-2.121 1.67-3.788 3.795-3.788 1.2 0 2.353.558 3.105 1.44Zm0 9.338.069-.069c3.284-2.968 5.451-4.93 5.451-6.921 0-1.377-1.035-2.41-2.415-2.41-1.063 0-2.098.681-2.456 1.625h-1.29c-.366-.944-1.401-1.625-2.464-1.625-1.38 0-2.415 1.033-2.415 2.41 0 1.99 2.167 3.953 5.451 6.921l.069.069Z"
							fill={props.fill}
						/>
						<path
							d="M .658 5.57 6.35 11.77 l .518-1.033 L 8.42 9.703 l 1.553-1.55 1.552-1.55.518-1.549 V 2.988 l -.518-1.033-1.552-.516 H 8.42 l -.517.516 H 6.35 L 4.28 1.44 3.245.922 l -2.07 1.033 L .14 3.505.658 5.57 Z"
							fill={props.fill}
						/>
					</>
				)
			default:
				return (
					<></>
				)
		}
	}

	return (
		<svg
			width={24}
			height={24}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			{setIcon(props.icon)}
		</svg>
	)
}

export default Icon