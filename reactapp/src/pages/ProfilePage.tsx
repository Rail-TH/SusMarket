import React from 'react'
import Banner from '../components/AdBanner'
import { motion } from 'framer-motion'
import '../ProfileStyle.scss'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProfileOrders from '../components/ProfileOrders'
import ProfilePurchases from '../components/ProfilePurchases'
import LogoutIcon from '../assets/icons/logout-icon.svg'
import Cookies from 'js-cookie'

function ProfilePage() {
	const navigate = useNavigate()

	const handleLogout = () => {
		Cookies.remove('user')
		Cookies.remove('user_id')
		navigate('/')
	}

	return (
		<section className='profile-page'>
			<Banner />
			<Routes>
				<Route path='/' element={<ProfileOrders />} />
				<Route path='purchases' element={<ProfilePurchases />} />
			</Routes>
			<motion.button
				className='profile-page__logout-button'
				whileTap={{ scale: 0.9 }}
				transition={{ duration: 0.2, type: 'spring' }}
				onClick={handleLogout}
			>
				<img src={LogoutIcon} alt='Logout icon' />
			</motion.button>
		</section>
	)
}

export default ProfilePage
