"use client";

import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavbarSidebar } from "@/module/home/navbar-sidebar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["700"],
});

interface NavbarItemProps {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
	return (
		<Button
			variant="outline"
			className={cn(
				"rounded-full border-transparent bg-transparent px-3.5 text-lg hover:border-primary hover:bg-transparent",
				isActive && "bg-black text-white hover:bg-black hover:text-white",
			)}
			asChild
		>
			<Link href={href}>{children}</Link>
		</Button>
	);
};
};

const navbarItems = [
	{ href: "/", children: "Home" },
	{ href: "/about", children: "About" },
	{ href: "/features", children: "Features" },
	{ href: "/pricing", children: "Pricing" },
	{ href: "/contact", children: "Contact" },
];

export const Navbar = () => {
	const pathname = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<nav className="flex h-20 justify-between border-b bg-white font-medium">
			<Link href="/" className="flex items-center pl-6">
				<span className={cn("font-semibold text-5xl", poppins.className)}>
					vcom
				</span>
			</Link>
			<NavbarSidebar
				items={navbarItems}
				open={isSidebarOpen}
				onOpenChange={setIsSidebarOpen}
			/>

			<div className="hidden items-center gap-4 lg:flex">
				{navbarItems.map((item) => (
					<NavbarItem
						key={item.href}
						isActive={pathname === item.href}
						{...item}
					/>
				))}
			</div>

			<div className="hidden lg:flex">
				<Button
					variant="secondary"
					className="h-full rounded-none border-0 border-l bg-white px-12 text-lg transition-color hover:bg-pink-400"
					asChild
				>
					<Link href="/sign-in">Log in</Link>
				</Button>
				<Button
					className="h-full rounded-none border-0 border-l bg-black px-12 text-lg text-white transition-color hover:bg-pink-400 hover:text-black"
					asChild
				>
					<Link href="/sign-up">Start selling</Link>
				</Button>
			</div>

			<div className="flex items-center justify-center lg:hidden">
				<Button
					variant="ghost"
					className="size-12 border-transparent bg-white"
					onClick={() => setIsSidebarOpen(true)}
				>
					<MenuIcon />
				</Button>
			</div>
		</nav>
	);
};
