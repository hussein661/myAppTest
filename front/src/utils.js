export const objectToQuery = params => {
  return Object.keys(params)
  .filter( key => params[key] !== undefined)
  .map( key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
  .join('&')
  .trim();
}


export const makeRequestUrl = (path, params) => {
  if(!params){ return path } // if no parameters were provided, return early
  const query = objectToQuery(params)
  if(query.length){
    const has_interrogation_mark = path.indexOf('?') >= 0 
    const url = path + (has_interrogation_mark ? '&' : '?') + query;
    return url
  }
  return path
}


