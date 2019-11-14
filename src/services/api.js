const port = `1337`
const rootUrl = `http://localhost:${port}/`
const getUnits = rootUrl+`app/subjects/1/topics/1/allUnits`;
const api = {
  getUnits: ()=>{
    return fetch(getUnits)
  },

}

export default api;
