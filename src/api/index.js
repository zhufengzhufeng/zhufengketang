import 'es6-promise';
import 'whatwg-fetch';

export function get(url) {
    return fetch(url,{
        headers:{
            accept:'application/json'
        }
    }).then(res=>res.json())
}