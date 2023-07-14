import { ChevronLeftIcon, WifiIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const PayRightBar = (props) => {
	const [amount, setAmount] = useState(0);
	return (
		<div>
			<div className="p-6">
				<div className=" text-xl font-semibold text-black flex items-center">
					<a className=" cursor-pointer bg-gray-200 rounded-xl w-[40px] h-[40px] flex justify-center items-center text-center" onClick={props.hidePayPage}>
						<ChevronLeftIcon className="h-4 w-4" />
					</a>
					<span className="ml-3">Go back</span>
				</div>
				<div className="text-center flex flex-col items-center">
					<h2 className="text-black text-2xl font-bold mt-6">You are sending to: </h2>
					<div className="w-[300px] flex items-center border rounded-2xl p-2 mt-4">
						<img src="https://ui-avatars.com/api/?name=John+Doe&background=E5F5F9&color=000" width={55} height={55} className="rounded-xl" />
						<div className="flex flex-col justify-center text-left ml-3">
							<h5 className="text-black font-bold">John Doe</h5>
							<h5 className="text-gray-600">1234 5678 **** 9000</h5>
						</div>
					</div>
				</div>
				<div className="text-center mt-20">
					<h1 className="text-7xl text-black font-extrabold">$ {amount}</h1>
				</div>
				<div className="text-center mt-10 rounded-2xl flex justify-center items-center">
					<div className="w-[150px] h-[40px] flex items-center justify-center">
						<div className="text-black bg-blue-200 h-100 px-3 text-center flex items-center rounded-l-lg">2357</div>
						<div className="bg-black h-100 flex items-center rounded-r-lg">
							<WifiIcon width={20} className="rotate-90 mx-1" />
						</div>
					</div>
					<div className="flex justify-center items-center">
						<h2 className="text-gray-700 text-xl">Card Balance:</h2>
						<h2 className="text-black font-bold text-xl ml-2">$242,567</h2>
					</div>
				</div>
				<div className="w-full mt-6">
					<button className="btn btn-blue w-full py-3">Send Money</button>
				</div>
				<div className="w-full grid grid-cols-3 gap-3 mt-3">
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">1</button>
					</div>
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">2</button>
					</div>
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">3</button>
					</div>
				</div>
				<div className="w-full grid grid-cols-3 gap-3 mt-3">
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">4</button>
					</div>
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">5</button>
					</div>
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">6</button>
					</div>
				</div>
				<div className="w-full grid grid-cols-3 gap-3 mt-3">
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">7</button>
					</div>
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">8</button>
					</div>
					<div className="text-black col-span-1 text-center w-full text-2xl ">
						<button className="btn-pay w-full rounded-2xl py-3">9</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PayRightBar;
