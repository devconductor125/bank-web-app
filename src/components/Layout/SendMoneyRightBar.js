import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const SendMoney = (props) => {
	const [lastTransfers, setLastTransfers] = useState([]);
	const [aGroup, setAGroup] = useState([]);

	useEffect(() => {
		setLastTransfers([
			{
				avatar: "https://ui-avatars.com/api/?name=John+Doe&background=E5F5F9&color=000",
				name: "Jhon Doe",
				card: "1234 5678 **** 9000",
			},
			{
				avatar: "https://ui-avatars.com/api/?name=J+C&background=E5F5F9&color=000",
				name: "Jango C",
				card: "1234 5678 **** 9000",
			},
			{
				avatar: "https://ui-avatars.com/api/?name=V+P&background=E5F5F9&color=000",
				name: "Veres P",
				card: "1234 5678 **** 9000",
			},
			{
				avatar: "https://ui-avatars.com/api/?name=G+H&background=E5F5F9&color=000",
				name: "Guy H",
				card: "1234 5678 **** 9000",
			},
		]);
		setAGroup([
			{
				avatar: "https://ui-avatars.com/api/?name=Alina+N&background=E5F5F9&color=000",
				name: "Alina N",
				card: "1234 5678 **** 9000",
			},
			{
				avatar: "https://ui-avatars.com/api/?name=A+M&background=E5F5F9&color=000",
				name: "Andy M",
				card: "1234 5678 **** 9000",
			},
			{
				avatar: "https://ui-avatars.com/api/?name=A+B &background=E5F5F9&color=000",
				name: "Anna B",
				card: "1234 5678 **** 9000",
			},
		]);
	}, []);
	return (
		<div>
			<div className="p-6 ">
				<div className=" text-xl font-semibold text-black flex items-center">
					<a className=" cursor-pointer bg-gray-200 rounded-xl w-[40px] h-[40px] flex justify-center items-center text-center" onClick={props.hideSendBar}>
						<ChevronLeftIcon className="h-4 w-4" />
					</a>
					<span className="ml-3">Go back</span>
				</div>
				<div className="text-black mt-6">
					<h1 className="text-xl font-extrabold">Send Money</h1>
					<div className="mt-3">
						<label htmlFor="default-search" className="mb-2 text-sm text-gray-900 dark:text-white font-bold">
							Write name, number of the card or phone number
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								className="block w-full pl-10 py-3 pr-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Start searching here"
								required
							></input>
						</div>
					</div>
				</div>
				<div className="text-black mt-6">
					<h6 className="mb-2 text-sm text-gray-900 dark:text-white font-bold">My Cards</h6>
					<div className="flex items-center">
						<img src="https://ui-avatars.com/api/?name=John+Doe&background=E5F5F9&color=000" width={50} height={50} className="rounded-xl" />
						<span className="ml-6 text-black font-bold">On my card 1234****9000</span>
					</div>
				</div>
				<div className="text-black mt-3">
					<h6 className="mb-2 text-sm text-gray-900 dark:text-white font-bold">Last Transfers</h6>
					{lastTransfers.map((item, index) => {
						return (
							<div className="flex items-center mt-3 cursor-pointer" key={index} onClick={props.goToPay}>
								<img src={item.avatar} width={50} height={50} className="rounded-xl" />
								<div className="flex flex-col justify-center ml-3">
									<h5 className="text-black font-bold">{item.name}</h5>
									<h5 className="text-gray-600">{item.card}</h5>
								</div>
							</div>
						);
					})}
				</div>
				<div className="text-black mt-3">
					<h6 className="mb-2 text-sm text-gray-900 dark:text-white font-bold">A</h6>
					{aGroup.map((item, index) => {
						return (
							<div className="flex items-center mt-3 cursor-pointer" key={index} onClick={props.goToPay}>
								<img src={item.avatar} width={50} height={50} className="rounded-xl" />
								<div className="flex flex-col justify-center ml-3">
									<h5 className="text-black font-bold">{item.name}</h5>
									<h5 className="text-gray-600">{item.card}</h5>
								</div>
							</div>
						);
					})}
				</div>
				<div className="text-black mt-3">
					<h6 className="mb-2 text-sm text-gray-900 dark:text-white font-bold">B</h6>
					{aGroup.map((item, index) => {
						return (
							<div className="flex items-center mt-3 cursor-pointer" key={index} onClick={props.goToPay}>
								<img src={item.avatar} width={50} height={50} className="rounded-xl" />
								<div className="flex flex-col justify-center ml-3">
									<h5 className="text-black font-bold">{item.name}</h5>
									<h5 className="text-gray-600">{item.card}</h5>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SendMoney;
