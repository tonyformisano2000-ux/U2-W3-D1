class User {
  constructor(_Name, _lastName, _Age, _Breed, _Species, _location) {
    this.Name = _Name;
    this.LastName = _lastName;
    this.Age = _Age;
    this.Breed = _Breed;
    this.Species = _Species;
    this.Location = _Location;
  }
}

const inviaForm = (e) => {
  e.preventDefault();
  const infos = document.querySelectorAll("input").value;
  console.log(infos);
  return infos;
};
