// import { useEffect, useState } from 'react';
// import getMusics from '../../services/musicsAPI';
// import loading from '../components/Loading';
// import ImageCard from '../components/ImageCard';

// function Album() {
//   const [isLoading, setIsLoading] = useState(false);

//   const [album, setAlbum] = useState();
  
//   const fetchData = async () => {
//     setIsLoading(true);
//     const data = await getMusics(`${id}`);
//     setIsLoading(false);
//     setAlbum(data[0]);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return loading();
//   }

//   return (
//     <>
//       { album && (
//         <>
//           <h1 data-testid="artist-name">{ album.artistName }</h1>
//           <h2 data-testid="album-name">{ album.collectionName }</h2>
//         </>
//       )}

//       { album.map((song) => (
//         <ImageCard
//           key={ song.trackId }
//           previewUrl={ song.previewUrl }
//         />
//       ))}
//       Oi
//     </>
//   );
// }

// export default Album;