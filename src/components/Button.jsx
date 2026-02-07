const Button = ({ TagName = "button", children, primary = true, ...props }) => {
	return primary ?
			<TagName
				{...props}
				className="text-white py-[14.5px] px-[34px] bg-black-222 uppercase cursor-pointer inline-block"
			>
				{children}
			</TagName>
		:	<TagName
				{...props}
				className="text-black py-[14.5px] px-[34px] bg-white uppercase cursor-pointer inline-block"
			>
				{children}
			</TagName>;
};

export default Button;
