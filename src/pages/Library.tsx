import Book from './Book';


function Library() {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Leído" ISBN={''}/>
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
    </div>
  );
}

export default Library;