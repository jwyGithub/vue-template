const envType = process.env.VUE_APP_BASIC_API;

let baseUrl = '';
// http://10.230.39.12:8080/vms-app-web/restful/appLogin
switch (envType) {
    case 'dev':
        baseUrl = 'http://localhost:3000';
        break;
    case 'pro':
        baseUrl = 'http://localhost/pro';
        break;
    case 'qa':
        baseUrl = 'http://localhost/qa';
        break;
    default:
        break;
}

export default baseUrl;
