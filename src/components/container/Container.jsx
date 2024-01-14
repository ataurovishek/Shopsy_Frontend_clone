/* eslint-disable react/prop-types */


const Container = (props) => {
    return (
        <div className=" w-[90%] mx-auto">
            {props.children}
        </div>
    );
};

export default Container;