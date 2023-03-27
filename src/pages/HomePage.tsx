import { Header } from '../components/common/Header'
import { IsLogin } from '../components/common/IsLogin'
import { Home } from '../components/home/Home'
import { HeaderView } from '../view/common/HeaderView'

export const HomePage = () => {
	// IsLogin()
	return (
		<>
			<Header />
			<Home />
		</>
	)
}
