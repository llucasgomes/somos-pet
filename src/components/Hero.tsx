import GradualSpacing from './magicui/gradual-spacing'

export const Hero = () => {
	return (
		<section
			style={{ backgroundImage: 'url("/Hero.png")' }}
			className=" relative w-full h-screen flex flex-col items-center justify-center bg-slate-500 gap-2"
		>
			<GradualSpacing
				className="font-bold text-6xl w-4/5  gap-2 flex flex-col items-center justify-center"
				text="NÃO PERCA SEU TEMPO"
			/>
			<GradualSpacing className="text-3xl" text="CUIDE DO SEU PET COMO ELE MERECE!" />
			<GradualSpacing
				className="text-xl font-medium w-4/5 text-center"
				text="Compre agora e ganhe 50% de desconto no primeiro carrinho."
			/>
		</section>
	)
}
