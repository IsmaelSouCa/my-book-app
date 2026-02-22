import Book from './Book';


function Library() {
  return (
    <div className="grid grid-cols-4 p-4">
      <Book cover="src/assets/cuarto_mono_cover.jpg" title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/chica_de_nieve_cover.jpg" title="La Chica de Nieve" author="Javier Castillo" published="12/03/2020" status="Pendiente" ISBN={''}/>
      <Book cover="src/assets/la_asistenta_cover.jpg" title="La Asistenta" author="Freida McFadden" published="05/10/2023" status="Leído" ISBN={''}/>
      <Book cover="src/assets/aelpv_cover.jpg" title="Así es la puta vida" author="Jordi Wild" published="03/11/2022" status="Leído" ISBN={''}/>
      <Book cover="src/assets/lsdy_cover.jpg" title="Los secretos de YouTube" author="TheGrefg" published="27/11/2018" status="Pendiente" ISBN={''}/>
    </div>
  );
}

export default Library;