import ProductsCard from "./ProductsCard";

const Products = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-[3rem]">
                <p className="text-[#fea928] text-sm">Top Selling Products for you</p>
                <h5 className="font-bold text-3xl">Products</h5>
                <p className="text-[12px] text-[#8a8a89]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
            <ProductsCard />
        </div>
    );
};

export default Products;