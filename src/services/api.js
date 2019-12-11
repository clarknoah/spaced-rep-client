import X from "axios";
const port = `1337`
const rootUrl = `http://localhost:${port}/`
const getUnits = rootUrl+`app/subjects/1/topics/602/allUnits`;
const submitSession = rootUrl+`app/subjects/1/topics/1/submitSession`;
const createUser = rootUrl+`app/user`
const loginUser = rootUrl+`app/login`
const getCategories = rootUrl+`app/categories`
const createSubject = rootUrl+`app/subject`
const api = {
  getUnits: ()=>{
    return X.get(getUnits)
  },
  getUnitsDev: ()=>{
    return X.get(getUnits)
  },
  submitSession:(payload)=>{
    return X.post(submitSession, payload)
  },
  submitSessionDev:(payload)=>{
    return X.post(submitSession, payload)
  },
  createUser:(payload)=>{

    console.log(payload);
    return X.post(createUser, payload)
  },
  loginUser:(payload)=>{

    console.log(payload);
    return X.post(loginUser, payload)
  },
  getCategories:()=>{
    return X.get(getCategories)
  },
  createSubject:(payload)=>{

    console.log(payload);
    return X.post(createSubject, payload)
  }

}

export default api;
