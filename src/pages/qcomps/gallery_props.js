function Profile({ person }) {
  return (
    <div>
      <section className="profile">
        <h2>person.name</h2>
        <img
          className="avatar"
          src={`https://i.imgur.com/${person.imageId}.jpg`}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.totalAwards} </b>({person.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdGs",
          profession: "physicist and chemist",
          totalAwards: "4",
          awards:
            "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
          discovered: "polonium (element)",
        }}
      />

      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2s",
          profession: "geochemist",
          totalAwards: "2",
          awards: "Miyake Prize for geochemistry, Tanaka Prize",
          discovered: "a method for measuring carbon dioxide in seawater",
        }}
      />
    </div>
  );
}
