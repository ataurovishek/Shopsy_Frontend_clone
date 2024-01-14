

const TrendingCards = () => {

    const cardList = [
        {
            id:1,
            title: 'Trending Products'
        },
        {
            id:2,
            title: 'Best Selling'
        },
        {
            id:3,
            title: 'Top Rated'
        },
    ]
    return (
        <div className="flex flex-col bg-[#ffffff] whitespace-nowrap p-2 rounded-md shadow-lg">
            {cardList.map(item=> <li key={item.id} className="hover:bg-[#f8d6a4] w-[100%] pr-[4rem] py-2 px-2 rounded-md">{item.title}</li> )}
        </div>
    );
};

export default TrendingCards;