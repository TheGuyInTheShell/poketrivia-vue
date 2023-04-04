const getArray = () => {
  const pokeArr = new Array(650).fill(0)

  return pokeArr.map((_, i) => i + 1)
}

const arrayShuffle = () => {
  const mixedPokemons = getArray().sort(() => Math.random() - Math.random())

  return mixedPokemons.slice(0, 4)
}

const getPokemonsNames = async () => {
  const pokePromises = arrayShuffle().map((id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => res)
      .catch(console.log)
  )
  const [a, b, c, d] = await Promise.all(pokePromises)
  return [
    {
      id: a.id,
      name: a.name
    },
    {
      id: b.id,
      name: b.name
    },
    {
      id: c.id,
      name: c.name
    },
    {
      id: d.id,
      name: d.name
    }
  ]
}

export default getPokemonsNames
