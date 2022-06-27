
const requestHandler = async ({
    url,
    method = 'GET',
    headers = {},
    body = '',
    errMsg = 'Failed to fetch data',
  }) => {
    try {
      const res = await fetch(url, { method, headers, body: body === '' ? null : body });
      return res.json();
    } catch (err) {
        console.log(errMsg)
        console.log(err)
    }
  };
  
  export default requestHandler;
