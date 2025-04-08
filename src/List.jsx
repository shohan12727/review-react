function List (props){
    const itemList = props.items ;
    const categoty = props.category;

    const itemLists = itemList.map(item => 
    <li key={item.id}>
         {item.title} <br />
         Auther Name:&nbsp;
         {item.author} <br />
         Year:
         {item.year} <br />
         type:
         {item.genre}

         </li>)
    return(
        <>
        <h3>{categoty}</h3>   
        <ol  className="card-container">{itemLists}</ol> 
        </>

    );
}

export default List;