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
    <div className="bg-white shadow-md rounded-lg m-4 w-64 h-80 flex flex-col items-center justify-between p-2">
        <div className="h-50 w-full rounded-lg overflow-hidden flex items-center justify-center">
            <img src={props.cover} alt="Book Cover" className="w-full h-full object-cover" />
        </div>
            <p className="font-bold text-center">{props.title}</p>
            <p className="text-sm text-gray-500">{props.author}</p>
            <p className="text-xs text-gray-400">Publicado: {props.published}</p>
            <span className={`text-xs font-semibold ${props.status === 'Leído' ? 'text-green-500 bg-green-200' : 'text-orange-500 bg-orange-200'} px-1 py-0.5 rounded`}>{props.status}</span>
    </div>
  );
}

export default Book;