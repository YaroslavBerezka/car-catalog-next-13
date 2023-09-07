import { FC } from 'react'

interface IPrice {
	price: string
}

const Price: FC<IPrice> = ({ price }) => {
	return (
		<p>
			{new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
				currencyDisplay: 'narrowSymbol',
			}).format(+price)}
		</p>
	)
}

export default Price
