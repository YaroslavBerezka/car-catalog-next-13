import axios from 'axios'
import { ICar, ICarData } from '../types/car.interface.js'

export const CarService = {
	async getAll() {
		const response = await axios.get('http://localhost:4400/cars')
		return response.data
	},
	async getById(id: string | undefined) {
		const response = await axios.get<ICar[]>(
			`http://localhost:4400/cars?id=${id}`
		)
		return response.data[0]
	},
	async create(data: ICarData) {
		return axios.post('http://localhost:4400/cars', data)
	},
}
