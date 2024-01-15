/* eslint-disable react/prop-types */


const Container = (props) => {
    return (
        <div className=" w-[88vw] mx-auto">
            {props.children}
        </div>
    );
};

export default Container;