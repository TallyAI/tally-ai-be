exports.seed = function (knex) {
  return knex("businesses").insert([
    {
      "id": 1,
      "name": "First Draft Book Bar",
      "city": "Phoenix",
      "state": "AZ"
    },
    {
      "id": 2,
      "name": "La Gattara Cat Lounge and Boutique",
      "city": "Tempe",
      "state": "AZ"
    }
  ]);
};
