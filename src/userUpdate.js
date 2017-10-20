// Click "EXAMPLE EVENT" to see whats in `event`
module.exports = function (event) {
  if(event.context.auth === null) {
  	return {error: 'No auth'}
  }
  return {data: event.data}
}
