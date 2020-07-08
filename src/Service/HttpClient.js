import { reactLocalStorage } from "reactjs-localstorage";
// const bash_url = 'https://bioimages-test.tern.org.au/api/v1.0/';

async function requestData(url, method, params = null, tokenCustom = null) {
  let login_status = reactLocalStorage.getObject("token");
  if (tokenCustom !== null) {
    login_status = tokenCustom;
  }
  let apiUrl = bash_url + url;
  const options = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://bioimages-test.tern.org.au",
      Authorization: "Bearer " + login_status,
    },
  };
  if (method === "DELETE") {
  } else if (method !== "GET") {
    options["body"] = JSON.stringify(params);
  }
  // console.log("apiUrl + method", apiUrl + method);
  return await fetch(apiUrl, options)
    .then((res) => res.json())
    .then(
      (result) => {
        //console.log("result",result);
        if (result.status === false && result.loginStatus === false) {
          reactLocalStorage.clear();
          setTimeout(function () {
            window.location.reload();
          }, 200);
        }
        return result;
      },
      (error) => {
        // this.setState({ error });
      }
    );
}

async function fileUplode(
  url,
  method,
  file,
  object_get = {},
  tokenCustom = null
) {
  let login_status = "sdfghjkl";
  if (tokenCustom !== null) {
    login_status = tokenCustom;
  }

  let apiUrl = bash_url + url;
  const data = new FormData();
  data.append("file", file);

  Object.keys(object_get).forEach(function (key) {
    data.append(key, object_get[key]);
  });

  let headers = {
    Accept: "application/json",
    // 'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "https://bioimages-test.tern.org.au",
    Authorization: "Bearer " + login_status,
  };

  return await fetch(apiUrl, {
    method: method,
    headers: headers,
    body: data,
  })
    .then((response) => response.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        return error;
      }
    );
}

export default {
  requestData,
  fileUplode,
};
