import { useState, useEffect } from "react";
import { WalletIcon, ArchiveBoxIcon, CurrencyDollarIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Layout/Sidebar";

import avatar from "../../assets/images/avatar.png";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import income from "../../assets/images/income.svg";
import outcome from "../../assets/images/outcome.svg";
import send from "../../assets/images/send.svg";
import receive from "../../assets/images/receive.svg";
import coin from "../../assets/images/coin.svg";
import android from "../../assets/images/android.svg";

import TransactionSide from "../../components/Layout/TransactionSide";
import SendMoneyRightBar from "../../components/Layout/SendMoneyRightBar";
import PayRightBar from "../../components/Layout/PayRightBar";
import CheckoutMessage from "../../components/Layout/CheckoutMessage";

const Dashboard = () => {
	const [transactions, setTransaction] = useState([]);
	const [showRightBar, setShowRightBar] = useState(false);
	const [showSendMoney, setShowSendMoney] = useState(false);
	const [showPayPage, setShowPayPage] = useState(false);
	const [showCheckOut, setCheckOut] = useState(false);
	const [transDetail, setTransDetail] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		setTransaction([
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
					name: "Airplane ticket",
				},
				date: "10 Jul, 2023",
				amount: 2456,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=William+Doe&background=0D8ABC&color=fff",
					name: "Coffee Shop",
				},
				date: "10 Jul, 2023",
				amount: 10,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=Lunny+Ronald&background=0D8ABC&color=fff",
					name: "Marie M.",
				},
				date: "10 Jul, 2023",
				amount: 20,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=Christian+Rodrigo&background=0D8ABC&color=fff",
					name: "Gym",
				},
				date: "10 Jul, 2023",
				amount: 300,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=Jhon+Rambo&background=0D8ABC&color=fff",
					name: "Gas",
				},
				date: "10 Jul, 2023",
				amount: 39,
			},
		]);
	}, []);

	const logout = () => {
		navigate("/signin");
	};

	const viewTransaction = (transaction) => {
		setShowRightBar(true);
		setTransDetail(transactions[transaction]);
	};

	const hideTransaction = () => {
		setShowRightBar(false);
	};

	const sendMoneyBar = () => {
		setShowSendMoney(true);
	};

	const hideSendBar = () => {
		setShowSendMoney(false);
	};

	const goToPay = () => {
		setShowPayPage(true);
	};

	const hidePayPage = () => {
		setShowPayPage(false);
	};

	const sendMoneyCheck = () => {
		setCheckOut(true);
	};

	const hideCheckout = () => {
		setCheckOut(false);
	};

	const clearAll = () => {
		hideCheckout();
		hidePayPage();
		hideSendBar();
	};

	return (
		<>
			<div className="flex-col align-center">
				<Sidebar />
			</div>
			<div className={`top-0 overflow-y-scroll right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${showRightBar ? "translate-x-0 " : "translate-x-full"}`}>
				<TransactionSide hideTransaction={hideTransaction} data={transDetail} />
			</div>
			<div className={`overflow-y-scroll top-0 right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${showSendMoney ? "translate-x-0 " : "translate-x-full"}`}>
				<SendMoneyRightBar hideSendBar={hideSendBar} goToPay={goToPay} />
			</div>
			<div className={`overflow-y-scroll top-0 right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${showPayPage ? "translate-x-0 " : "translate-x-full"}`}>
				<PayRightBar hidePayPage={hidePayPage} sendMoneyCheck={sendMoneyCheck} />
			</div>
			<div className={`overflow-y-scroll top-0 right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${showCheckOut ? "translate-x-0 " : "translate-x-full"}`}>
				<CheckoutMessage hideCheckout={hideCheckout} clearAll={clearAll} />
			</div>
			<div className="text-center w-full max-w-[calc(100vw-21rem)] float-right px-6 py-5">
				<div className="w-100 flex justify-between font-satoshi">
					<div className="text-3xl font-bold">Good morning, Amelia!</div>
					<div>
						<img src={avatar} className="peer rounded-3xl" width={50} height={50}></img>
						<div className="hidden peer-hover:flex hover:flex w-[120px] flex-col bg-white drop-shadow-lg absolute right-8 mt-[-10px]">
							<a className="px-2 py-3 hover:bg-gray-200" href="#">
								About Us
							</a>
							<a className="px-2 py-3 hover:bg-gray-200" href="#">
								Contact Us
							</a>
							<a className="px-2 py-3 hover:bg-gray-200 flex justify-center items-center" onClick={() => logout()}>
								<ArrowLeftOnRectangleIcon width={30} height={15} />
								Logout
							</a>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 mt-3 gap-4 lg:gap-6 sm:gap-4 xl:gap-8">
					<div className="col-span-12 lg:col-span-7">
						<div className="text-left">
							<span className="text-2xl font-bold flex items-center">
								Cards<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-100 rounded">2</span>
							</span>
						</div>
						<div className="grid lg:grid-cols-12 grid-cols-6 mt-2 gap-3 h-[250px] w-min-[800px] ">
							<div className="col-span-6 relative">
								<img src={card1} alt="Card 1" className="w-full absolute z-10 rounded-[20px] h-full" />
								<div className=" absolute z-20 bottom-8 left-8 ">
									<div className=" text-2xl font-bold w-full tracking-[1.5px]">**** **** **** 9000</div>
									<div className="flex justify-between mt-2">
										<span className="text-sm font-bold">Olivia Dennis</span>
										<span className="text-sm font-bold">12/24</span>
									</div>
								</div>
							</div>
							<div className="col-span-6 relative">
								<img src={card2} alt="Card 1" className="w-full absolute z-10 rounded-[20px] h-full" />
								<div className=" absolute z-20 bottom-8 left-8 ">
									<div className=" text-2xl font-bold w-full tracking-[2px]">**** **** **** 9000</div>
									<div className="flex justify-between mt-2">
										<span className="text-sm font-bold">Olivia Dennis</span>
										<span className="text-sm font-bold">12/24</span>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="text-left mt-4 flex justify-between">
								<span className="text-2xl font-bold">Transactions</span>
								<div className="flex justify-end">
									<select
										id="status"
										className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option>Status</option>
										<option value="active">Active</option>
										<option value="inactive">Inactive</option>
									</select>
									<select
										id="types"
										className="mx-2 pr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option>Types</option>
										<option value="pending">Pending</option>
										<option value="approved">Approved</option>
										<option value="rejected">Rejected</option>
									</select>
									<div className="border border-gray-300 rounded-xl w-32 flex justify-center items-center text-center">
										<img src={android} className="h-4 w-4" />
									</div>
								</div>
							</div>
							<div className="mt-2">
								<div className="relative overflow-x-auto">
									<table className="w-full text-left font-satoshi">
										<thead className="">
											<tr>
												<th scope="col" className="py-3 text-gray-500 font-normal text-sm text-left">
													Name
												</th>
												<th scope="col" className="py-3 text-gray-500 font-normal text-sm" width="120">
													Date
												</th>
												<th scope="col" className="py-3 text-gray-500 font-normal text-sm text-right" width="80">
													Amount
												</th>
											</tr>
										</thead>
										<tbody>
											{transactions.map((item, index) => {
												return (
													<tr key={index} className="cursor-pointer hover:bg-gray-200" onClick={() => viewTransaction(index)}>
														<td className="py-2 cursor-pointer pl-3">
															<div className="flex items-center">
																<img src={item.name.avatar} width={40} height={40} className="rounded-xl" />
																<span className="font-bold ml-3 font-sans">{item.name.name}</span>
															</div>
														</td>
														<td className="text-gray-500 text-sm">{item.date}</td>
														<td className="text-right font-bold text-sm font-sans pr-3">${item.amount}</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-5">
						<div className="text-left w-full">
							<span className="text-2xl font-bold">Current Balance</span>
							<div className="mt-2 text-center w-full">
								<a className=" w-full block  p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
									<span className="my-3 text-base tracking-tight text-gray-900 dark:text-white">Actual Balance</span>
									<p className="text-gray-900 dark:text-white text-3xl font-bold justify-center flex text-center items-center mt-3">
										<img src={coin} className="h-5 w-5 mr-2 " />
										$242,456
									</p>
									<div className="grid grid-cols-2 mt-6 mb-2">
										<div className="flex justify-center">
											<img src={income} alt="Income" />
											Income: <span className="font-bold">$20,324</span>
										</div>
										<div className="flex justify-center">
											<img src={outcome} alt="Outcome" />
											Outcome: <span className="font-bold">$16,257</span>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="mt-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<a className="btn hover:bg-gray-300  cursor-pointer border border-gray-300 rounded-xl h-14 w-100 flex justify-between px-3 items-center text-center" onClick={sendMoneyBar}>
										<span>Send Money</span>
										<img src={send} />
									</a>
								</div>
								<div>
									<a className="btn hover:bg-gray-300  cursor-pointer border border-gray-300 rounded-xl h-14 w-100 flex justify-between px-3 items-center text-center">
										<span>Receive Money</span>
										<img src={receive} />
									</a>
								</div>
							</div>
						</div>
						<div className="w-full border border-gray-300 rounded-2xl mt-4 h-[calc(100vh-400px)] flex justify-center items-center flex-col lg:px-24 px-10">
							<CurrencyDollarIcon width={50} height={50} color="gray" />
							<p className="mt-6 font-bold">You don’t have any loans now.</p>
							<p className="mt-3">If you like to take a loan, press the button to know more</p>
							<p className="mt-3 btn btn-blue">
								<button>Take a loan</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Dashboard;
