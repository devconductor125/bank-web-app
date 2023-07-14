import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const CheckoutMessage = (props) => {
	return (
		<div>
			<div className="h-[100vh] bg-white">
				<div className="p-6 text-xl font-semibold text-black flex items-center">
					<a className=" cursor-pointer bg-gray-200 rounded-xl w-[40px] h-[40px] flex justify-center items-center text-center" onClick={props.hideCheckout}>
						<ChevronLeftIcon className="h-4 w-4" />
					</a>
					<span className="ml-3">Go back</span>
				</div>
				<div className="h-[calc(100vh-150px)] flex flex-col justify-center items-center text-black px-10">
					<h3 className="text-black px-5 text-2xl font-bold text-center">Money has been successfully transferred! </h3>
					<h3 className="text-gray-700 px-3 text-xl text-center mt-6 ">The money has been successfully transferred and will reflect in your transactions list soon. </h3>
					<button className="btn btn-blue text-center py-3 w-full mt-10" onClick={props.clearAll}>
						Got it!
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckoutMessage;
