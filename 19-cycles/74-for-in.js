//  const myObject = {
//      x: 10,
//      y: true,
//      z: 'abc'
//  }

//  for (const key in myObject) {
//      console.log(key, myObject[key])
//  }

const myObject = {
  x: 10,
  y: true,
  z: 'abc'
}

Object.values(myObject).forEach(value => {
    console.log(value)
})