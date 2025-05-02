interface TotalPriceDto {
	price: number
	discount: number
	isInstallment?: boolean
	months: number
}

const totalPrice = (options: TotalPriceDto): number => {
	const { price, discount, isInstallment, months } = options

	const discountedPrice = price - (price * discount) / 100

	if (isInstallment && months) {
		return discountedPrice / months
	}

	return discountedPrice
}

export const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
})
