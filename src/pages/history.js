function HistoryItem({count}){
    return(
        <li>
            {count}
        </li>
    )
}
export default function History({history}){
    return (
        <div>
        <h1>History</h1>
        <ul>
        {history.map((c) => {
          return(
        //   <li>{c}</li>
           <HistoryItem count={c}/>
          
          );
         
        })}
         </ul>
       </div>
    )
}