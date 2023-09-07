import { useForm } from 'react-hook-form'
import { ICarData } from '../../../../types/car.interface'
import ErrorMessage from '../createCarForm/ErrorMessage'
import { useCreateCar } from '../createCarForm/useCreateCar'
import styles from './CreateCarForm.module.scss'

const CreateCarForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<ICarData>({
		mode: 'onChange',
	})
	const { createCar } = useCreateCar(reset)

	return (
		<form className={styles.form} onSubmit={handleSubmit(createCar)}>
			<input
				{...register('name', { required: 'Name is required' })}
				placeholder='Name'
			/>
			<ErrorMessage errors={errors?.name?.message} />
			<input
				{...register('price', { required: 'Price is required' })}
				placeholder='Price'
			/>
			<input
				{...register('image', { required: 'Image is required' })}
				placeholder='Image'
			/>
			<button className='btn'>Create</button>
		</form>
	)
}

export default CreateCarForm
