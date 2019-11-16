// @flow
import React from 'react'
import Link from './../../components/Link'
import Button from './../../components/Button'
import isMobile from './../../utils/is-mobile'
import styles from './Header.css'

import logo from './images/logo.jpg'

const Header = () => (
	<header className="header">
		<Link className="logo" to="/medyumed">
			<img src={logo} alt="Med Yu Med"/>
		</Link>

		{!isMobile &&
			<nav>
				<ul className="list">
					<li className="item">
						<Link className="link" to="/medyumed/cosmetology">Отчёт по возвращаемости</Link>
					</li>	
					<li className="item">
						<Link className="link" href="https://app.orgstack.ru/login">Orgstack</Link>
					</li>
				</ul>
			</nav>
		}

		<div>
			{!isMobile &&
				
				<Link className="enter" href="https://amocrm.ru">Вход в AMO</Link>
			}
			<Button className="button" href="https://yclients.com">YClients</Button>
		</div>
	</header>
)

export default Header
