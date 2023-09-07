import Link from 'next/link'
import { FC } from 'react'
import { ICar } from '../../../../types/car.interface'
import styles from '../Home.module.scss'
import Price from './Price'
import { usePathname } from 'next/navigation'

interface ICarItem {
	car: ICar,
}

const CarItem: FC<ICarItem> = ({ car }) => {
	const pathname = usePathname()
	
	return (
		<div key={car.id} className={styles.item}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${car.image})`,
				}}
			></div>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<Price price={car.price} />
				{pathname === '/' ? <Link className='btn' href={`cars/${car.id}`}>
					Read more
				</Link> : ''}
				
			</div>
		</div>
	)
}

export default CarItem
