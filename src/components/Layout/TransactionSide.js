import { ChevronLeftIcon, MapPinIcon } from "@heroicons/react/24/solid";
import outcome from "../../assets/images/outcome.svg";
import cupoftea from "../../assets/images/cupoftea.svg";
import coin from "../../assets/images/coin.svg";
import apple from "../../assets/images/apple.svg";

const TransactionSide = (props) => {
	return (
		<div>
			<div className="h-[400px] bg-green-100">
				<div className="p-6 text-xl font-semibold text-black flex items-center">
					<a className=" cursor-pointer bg-white rounded-xl w-[40px] h-[40px] flex justify-center items-center text-center" onClick={props.hideTransaction}>
						<ChevronLeftIcon className="h-4 w-4" />
					</a>
					<span className="ml-3">Go back</span>
				</div>
				<div className="text-center flex flex-col items-center">
					<div className="p-3 bg-gray-900 rounded-xl">
						<img src={cupoftea} width={30} height={30} />
					</div>
					<h2 className="text-black text-2xl font-bold mt-3">{props?.data?.name?.name}</h2>
					<h2 className="text-gray-700 font-bold mt-2">{props?.data?.date}</h2>
					<span className="text-black inline-flex items-center justify-center font-semibold bg-orange-300 rounded py-1 px-2 mt-3">Pending</span>
				</div>
			</div>
			<div className="w-full flex justify-center -translate-y-[50%]">
				<div className="w-[90%] border rounded-2xl bg-white p-6  text-center">
					<h1 className="text-black text-6xl font-bold text-center">${props?.data?.amount}</h1>
					<div className="flex justify-center items-center mt-6">
						<img src={outcome} alt="Outcome" />
						<span className="text-black ml-2 font-bold">Outcome</span>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center -translate-y-[65px]">
				<div className="w-[90%] border rounded-2xl bg-white p-4  text-center flex items-center">
					<img src={coin} className="h-5 w-5 mr-2 text-black" />
					<span className="text-gray-800 ">Left Balance: </span>
					<span className="text-black font-bold ml-2"> $242,456</span>
				</div>
			</div>
			<div className="w-full flex justify-center -translate-y-[65px] mt-3">
				<div className="w-[90%] border rounded-2xl bg-white p-4  text-center flex items-center">
					<img src={apple} className="h-5 w-5 mr-2 text-black" />
					<span className="text-gray-800 ">Payment Method: </span>
					<span className="text-black font-bold ml-2">Apple Pay</span>
				</div>
			</div>
			<div className="w-full flex justify-center -translate-y-[65px] mt-3">
				<div className="w-[90%] border rounded-2xl bg-white p-4  text-center flex items-center">
					<MapPinIcon className="h-5 w-5 mr-2 text-black" />
					<span className="text-gray-800 ">Address: </span>
					<span className="text-black font-bold ml-2">1901 Thornridge Cir. Shiloh</span>
				</div>
			</div>
		</div>
	);
};

export default TransactionSide;
