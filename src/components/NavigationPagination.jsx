const NavigationPagination = ({ data,numberPages }) => {

  const dataList = () => {
    const dataPages = data.info?.pages;
    let initial = 1;
    const arrayPages = [];

    for (let i = 0; i <= dataPages; i++) {
      if (initial <= dataPages) {
        arrayPages.push(initial++);
      }
    }
    return (arrayPages);
  };

  const pagesNumbers = dataList()
  return (
    <div>
      {
        pagesNumbers.map((number, index) =>
          <button onClick={()=>numberPages(number)} key={index}>{number}</button>)
      }
    </div>
  );
};

export default NavigationPagination;