const Gentleman = (): JSX.Element => {
  const gentlemanData = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src="img/fary.jpg"
          alt="The Fary apuntándote con el dedo"
        />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">The Farytale</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profesión:</span>
            Influencer
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Estado:</span> RIP
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> pendiente
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
    </li>
  );
};

export default Gentleman;
