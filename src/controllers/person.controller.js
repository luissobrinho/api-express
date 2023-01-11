let persons = [];
let sequeceId = 1;

exports.get = (req, res, next) => {
  res.status(201).send(persons);
};

exports.post = (req, res, next) => {
  const person = { ...req.body, id: sequeceId };
  persons.push(person);
  res.status(201).send(person);
  sequeceId++;
};

exports.one = (req, res, next) => {
  let id = +req.params.id;
  const currentPerson = findOne(res, id);

  res.status(200).send(currentPerson);
};

exports.put = (req, res, next) => {
  let id = +req.params.id;
  const body = req.body;
  let currentPerson = findOne(res, id);

  currentPerson = {
    ...body,
    id,
  };

  persons = persons.map((person) => {
    if (person.id === id) {
      return currentPerson;
    }

    return person;
  });

  res.status(200).send(currentPerson);
};

exports.delete = (req, res, next) => {
  let id = +req.params.id;
  findOne(res, id);

  persons = persons.filter((person) => {
    return person.id !== id;
  });

  res.status(200).send({
    message: "Person removed successfull!",
  });
};

const findOne = (res, id) => {
    const currentPerson = persons.find((person) => person.id === id);

  if (!currentPerson) {
    return res.status(404).send({ error: "Person not found" });
  }

  return currentPerson;
}
