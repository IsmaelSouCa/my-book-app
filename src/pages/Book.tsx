interface IProps {
    ISBN : string;
    title: string;
    author: string;
    published: string;
    cover: string;
    status: string;
}

function Book(props: IProps) {
  return (
    <div className="bg-white shadow-md rounded-lg m-4 w-64 h-80">
        <div className="h-50 overflow-hidden justify-center">
            <img src={props.cover} alt={props.title} className="w-full h-full object-cover rounded-t-lg"/>
        </div>
        <div className="flex flex-col items-start p-4 h-32 justify-between">
            <p className="font-bold text-center">{props.title}</p>
            <p className="text-sm text-gray-500">{props.author}</p>
            <p className="text-xs text-gray-400">Publicado: {props.published}</p>
            <span className={`text-xs font-semibold ${props.status === 'Leído' ? 'text-green-500 bg-green-200' : 'text-orange-500 bg-orange-200'} px-1 py-0.5 rounded`}>{props.status}</span>
        </div>
    </div>
  );
}

export default Book;