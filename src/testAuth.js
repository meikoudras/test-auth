module.exports = function sum(event) {
  const data = event.data

  const sum = data.a + data.b

  if(event.context.auth === null) {
    return {error: 'No auth'}
  }
  return {data: {sum: sum}}
}