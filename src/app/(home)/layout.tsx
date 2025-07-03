import { Footer } from "@/module/home/footer";
import { Navbar } from "@/module/home/navbar";

type Props = {
	children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<div className="flex-1 bg-[#f4f4f4]">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
