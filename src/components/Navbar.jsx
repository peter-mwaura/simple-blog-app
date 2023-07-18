import React, { useContext } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const categories = [
		{
			name: "Web-Development",
			slug: "web-dev"
		},
		{
			name: "Astronomy",
			slug: "astronomy"
		},
		{
			name: "Sports",
			slug: "sports"
		},
		{
			name: "Education",
			slug: "education"
		},
		{
			name: "Photography",
			slug: "photography"
		},
	];

	return (
		<nav className="container mx-auto px-10 mb-8">
			<div className="flex flex-wrap justify-between items-center gap-8 border-b-8 w-full border-[#222] py-8">
				<div className="text-white cursor-pointer text-4xl font-bold">
					<Link href="/">
						<h1>PMKBlog</h1>
					</Link>
				</div>
				<ul className="hidden md:flex flex-wrap items-center gap-8 text-white text-lg">
					{categories.map((category) => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<li className="cursor-pointer font-semibold">{category.name}</li>
						</Link>
					))}
				</ul>
			</div>	
		</nav>
	)
}

export default Navbar;
