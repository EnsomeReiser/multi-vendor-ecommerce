import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

interface NavbarItem {
	href: string;
	children: React.ReactNode;
}

interface Props {
	items: NavbarItem[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent side="left" className="p-0 transition-none">
				<SheetHeader className="border-b p-4">
					<div className="flex items-center">
						<SheetTitle>Menu</SheetTitle>
					</div>
				</SheetHeader>
				<ScrollArea className="flex h-full flex-col overflow-y-auto pb-2">
					{items.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="flex w-full items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white"
							onClick={() => onOpenChange(false)}
						>
							{item.children}
						</Link>
					))}
					<div className="border-t">
						<Link
							href="/sign-in"
							className="flex w-full items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white"
							onClick={() => onOpenChange(false)}
						>
							Sign In
						</Link>
						<Link
							href="/sign-up"
							className="flex w-full items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white"
							onClick={() => onOpenChange(false)}
						>
							Start Selling
						</Link>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};
