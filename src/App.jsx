import styled, { ThemeProvider } from 'styled-components'
import Content from './views/Content'
import Search from './views/Search'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import theme from './theme'
import { Route } from 'wouter'
import Resources from './views/Resources'

const Body = styled.div`
	padding: 12px 32px;
	display: flex;

	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		padding: 12px 15px;
	}
`

function App() {

	return (
		<ThemeProvider theme={theme}>
			<div>
				<Header />
				<Body>
					<Sidebar />
					<Route path='/dynamic/:name' component={Content} />
					<Route path='/resources/:id' component={Resources} />
					<Route path='/search' component={Search} />
				</Body>
			</div>
		</ThemeProvider>
	)
}

export default App
