<template>
   <form
  id="addNewPet"
  @submit=""
  action="https://vuejs.org/"
  method="post"
>
  <p>
    <label for="name">Omanik</label>
    <input
      id="name"
      type="text"
      name="name"
    >
  </p>

   <p>
    <label for="pet_name">Looma nimi</label>
    <input
      id="pet_name"
      type="text"
      name="pet_name"
    >
  </p>

   <p>
    <label for="species">Omanik</label>
    <input
      id="species"
      type="text"
      name="species"
    >
  </p>

  <p>
    <label for="age">Vanus</label>
    <input
      id="age"
      type="number"
      name="age"
      min="0"
    >
  </p>

  <p>
    <label for="gender">Sugu</label>
    <select
      id="gender"
      name="gender"
    >
      <option>Emane</option>
      <option>Isane</option>
    </select>
  </p>

    <p>
    <label for="appearance">Välimus</label>
    <input
      id="appearance"
      type="text"
      name="appearance"
    >
  </p>
  
    <p>
    <label for="character">Iseloom</label>
    <input
      id="character"
      type="text"
      name="character"
    >
  </p>

    <p>
    <label for="picture">Link pildile</label>
    <input
      id="picture"
      type="link"
      name="picture"
    >
  </p>

    <p>
    <label for="add">Lisainfo</label>
    <input
      id="add"
      type="text"
      name="add"
    >
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>
