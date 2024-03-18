(async () => {
  let result = 1

  for (let n = 3, i = 0; i < 10; n += 2, i++) {
    if (i % 2 === 0)
      result = result - 1 / n

    else
      result = result + 1 / n

    // console.clear()
    // console.log(result * 4)
  }

  console.log(result * 4)
})()
