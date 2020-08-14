import axios from 'axios'
let instance = axios.create();
// 添加请求拦截器
instance.interceptors.request.use(function (config:any) {
    // 在发送请求之前做些什么
    let writePath = ['/api/login','/api/registry'];
    if(!writePath.includes(config.url)){
        config.headers.token = localStorage.getItem('token')
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

    // 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
      switch (error.response.status) {
          case 401:
              window.location.href="/login"
              break;
          case 500:
            console.log("服务器有误");
            break;
          default:
              break;
      }
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default{
    post(url:string,params?:any){
        return instance.post(url,params)
    },
    get(url:string,params?:any){
        return instance.get(url,{params})
    }
}