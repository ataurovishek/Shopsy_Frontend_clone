/* eslint-disable react/prop-types */


const ProductCardInfo = ({info}) => {
    return (
        <div>

            <p className="text-[#fea928] text-sm">{info.title}</p>
            <h5 className="font-bold text-3xl">{info.Heading}</h5>
            <p className="text-[12px] text-[#8a8a89]">{info.Description}</p>
        </div>
    );
};

export default ProductCardInfo;