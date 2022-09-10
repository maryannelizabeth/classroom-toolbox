import request from 'superagent'

export function addName(name) {
  console.log(name)
  return request
    .post('/v1/name')
    .send(name)
    .then((res) => res.body)
}

export function getNames() {
  return request.get('/v1/name').then((res) => {
    return res.body.names
  })
}
