// Third party libraries

function getFetch1(url, params={}){
    const queryString = Object.entries(params).map(param=>{
        return `${param[0]}=${param[1]}`
    }).join("&");
    return fetch(`${url}&${queryString}`,{
        method: "GET",
        headers: { "Content-Type": "application/json"}
    }).then(res=>res.json())
}

function getFetch2(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params,
  }).then((res) => res.data);
}
