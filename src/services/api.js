import X from "axios";
import utils from './utils';
const port = `1340`
const rootUrl = `http://localhost:${port}/`
const getUnits = rootUrl+`app/subjects/1/topics/602/session`;
const submitSession = rootUrl+`app/subjects/1/topics/1/submitSession`;
const createUser = rootUrl+`app/user`
const loginUser = rootUrl+`app/login`
const getCategories = rootUrl+`app/categories`
const createSubject = rootUrl+`app/subject`
const getUserHomeData = rootUrl+`app/getUserHomeData`;
const getUserSubjectData = rootUrl+`app/subjects`;


const api = {
  getTopicSessionUrl: (subject, topic)=>{
    return `${rootUrl}/subjects/${subject}/topics/${topic}/session`
  },
  getUnits: (subject, topic)=>{

    let payload = {
      subject: subject,
      topic: topic,
      user: utils.getActiveUserObjectMock()
    }
    console.log(this);
    let path = `${rootUrl}app/subjects/${subject}/topics/${topic}/session`;

    return X.post(path, payload);
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
  },
  getUserHomeData:()=>{
    let payload = {};
    payload.user = {
      email:"noahbc08@gmail.com",
      id: 3339
    };
    return X.post(getUserHomeData, payload)
  },
  getUserSubjectData:(id)=>{
    let path = getUserSubjectData+`/${id}/`;
    console.log(path);
    let payload = {
      subjectId: parseInt(id)
    }
    payload.user = utils.getActiveUserObjectMock();
    console.log(payload);
    return X.post(path, payload)
  }

}

export default api;
