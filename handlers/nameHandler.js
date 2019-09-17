const faker = require('faker');

module.exports = (req, res) => {
  const randomName = faker.name.findName();
   res.json({
      name: randomName,
   });
}
