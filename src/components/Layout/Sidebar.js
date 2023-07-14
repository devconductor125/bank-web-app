import { Card, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { ShoppingBagIcon, BuildingLibraryIcon, CurrencyDollarIcon, CreditCardIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

import transaction from "../../assets/images/transaction.svg";

export default function Navbar() {
	const [sideList, setSideList] = useState([]);

	useEffect(() => {
		setSideList([
			{
				name: "Dashboard",
				icon: BuildingLibraryIcon,
				active: true,
			},
			{
				name: "Transactions",
				icon: ShoppingBagIcon,
				active: false,
			},
			{
				name: "Loans",
				icon: CurrencyDollarIcon,
				active: false,
			},
			{
				name: "Cards",
				icon: CreditCardIcon,
				active: false,
			},
			{
				name: "Supports",
				icon: QuestionMarkCircleIcon,
				active: false,
			},
		]);
	}, []);
	const setActive = (clickid) => {
		const lists = [...sideList];
		const newLists = [];
		lists.map((item, index) => {
			const newList = { ...item, active: index == clickid ? true : false };
			newLists.push(newList);
		});
		setSideList([...newLists]);
	};
	return (
		<Card className="fixed top-3 left-3 h-[calc(100vh-1.5rem)] rounded-2xl bg-gray-900 w-full max-w-[20rem] p-4 ">
			<div className="mb-2 p-4 ">
				<Typography variant="h3" color="white" className="text-left">
					Banking<span className="text-green-600"> App</span>
				</Typography>
			</div>
			<List className="mb-2 p-4  ">
				{sideList.map((item, index) => {
					return (
						<ListItem key={index} className={` hover:bg-green-200 hover:text-black rounded py-3 px-3 align-center ${item.active ? "active" : "text-white"}`} onClick={() => setActive(index)}>
							<ListItemPrefix>
								<item.icon className="h-5 w-5 mr-3" />
							</ListItemPrefix>
							{item.name}
						</ListItem>
					);
				})}
			</List>
		</Card>
	);
}
