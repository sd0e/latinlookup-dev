import XHRGetRequest from "./XHRGetRequest";

export default function Ping() {
    const proxy = 'https://crossrun.onrender.com/';
    XHRGetRequest(proxy);
}