function GaleriePhotos() {
  const photos = [
    { id: 1, url: "https://picsum.photos/id/10/150/150", description: "Photo 1" },
    { id: 2, url: "https://picsum.photos/id/20/150/150", description: "Photo 2" },
    { id: 3, url: "https://picsum.photos/id/30/150/150", description: "Photo 3" }
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.description} width="150" />
      ))}
    </div>
  );
}

export default GaleriePhotos;