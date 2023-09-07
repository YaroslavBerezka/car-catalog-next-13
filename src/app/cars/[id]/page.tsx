"use client"
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { CarService } from '../../../services/car.service'
import CarItem from '@/components/screens/home/carItem/CarItem'


const CarDetail = ({params}: {params: {id: string}}) => {
    
	const { data } = useQuery(['car'], () => CarService.getById(params.id), {
		enabled: true
	})
	
	
	return (
		<div>
			{!data?.name ? (
				<p>Loading...</p>
			) : (
				<>
					<Link href='/' className='btn'>
						Back
					</Link>
					<CarItem car={data} />
				</>
			)}
		</div>
	)
}

export default CarDetail
