let utils = {



  convertType: function(value) {
    if (typeof value === 'boolean' || typeof value === 'number') {
      return value;
    } else if (typeof value === 'string') {
      return `"${value}"`
    } else {
      console.log("Unaccounted for format", value, typeof value)
    }
  },



  convertToNeo4jProperties: function(obj) {
    obj = JSON.parse(JSON.stringify(obj));
    const keys = Object.keys(obj)
    let neo4jObj = [];
    for (let i = 0; i < keys.length; i++) {
      console.log(keys[i]);
      let keyValueString = `${keys[i]}:${this.convertType(obj[keys[i]])}`
      neo4jObj.push(keyValueString);
    }
    return `{${neo4jObj.join(', \n')}}`;
  },



  createUniqueArray: (inputArray, filterKey)=>{
    var flags = {};
    var filteredArray = inputArray.filter(function(entry) {
      if (flags[entry[filterKey]]) {
        return false;
      }
      flags[entry.city] = true;
      return true;
    });
    return filteredArray;
  },



  getUniqueId: function() {
    return Math.random().toString(36).substr(2, 9);
  },



  parseTopicSessionPayload: function(payload, userTopic) {
    let orgPayload = payload;
    payload = this.returnUniqueArray(payload, 'userKuId');
    let matchVariables = payload.map(val => {
      let match = `(node${val.userKuId}:UserKnowledgeUnit)`
      return match;
    }).join(', ')
    let whereVariables = payload.map(val => {
      let where = `id(node${val.userKuId}) = ${val.userKuId}`;
      return where;
    }).join(' AND ')
    let createVariables = orgPayload.map(val => {
      val.attemptVariable = `(attempt${this.getUniqueId()}:Attempt ${this.convertToNeo4jProperties(val)})`
      let create = `CREATE (session)-[:HAS_ATTEMPT]->${val.attemptVariable}-[:ATTEMPT_FOR]->(node${val.userKuId})`
      return create;
    }).join(' \n ');

    let finalQuery = `
MATCH (node${userTopic}), ${matchVariables}
WHERE id(node${userTopic})=${userTopic} AND ${whereVariables}
CREATE (session:Session)-[:SESSION_OF]->(node${userTopic})
    ${createVariables}
    `
    console.log(finalQuery);
  },


  setActiveUser: (activeUserName, userId) => {
    localStorage.setItem('activeUserName', activeUserName);
    localStorage.setItem('userId', userId);
  },


  getActiveUserName: () => {
    let user = localStorage.getItem('activeUser');
    console.log(user);
    return user;

  },
  getActiveUserId: () => {
    let user = localStorage.getItem('userId');
    console.log(user);
    return user;

  }
}

export default utils;
