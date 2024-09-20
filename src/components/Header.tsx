import { Facebook, Instagram, MessageCircleIcon } from 'lucide-react'

export const Header = () => {
	return (
		<header className="fixed z-10 w-full h-20  flex items-center justify-around">
			<p className="font-bold text-2xl">SomosPet</p>
			<nav>
				<ul className="flex gap-6">
					<li className="font-normal text-lg hover:cursor-pointer">Home</li>
					<li className="font-normal text-lg hover:cursor-pointer">Sobre</li>
					<li className="font-normal text-lg hover:cursor-pointer">Preços</li>
					<li className="font-normal text-lg hover:cursor-pointer">Contato</li>
				</ul>
			</nav>
			<div className="flex gap-3">
				<Instagram size={24} className="hover:cursor-pointer" />
				<Facebook size={24} className="hover:cursor-pointer" />
				<MessageCircleIcon size={24} className="hover:cursor-pointer" />
			</div>
		</header>
	)
}
