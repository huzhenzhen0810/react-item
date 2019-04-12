import axios from 'axios';
export const getCaroursel = (data)=>{
    return {
        type   : 'CAROURSELLIST',
        payload: data
    }
}
export function fetchListcaroursel(params={page:1}){
    return dispatch=>{
        var url = `http://localhost:3000/caroursel`;
        return axios({
            url   : url,
            method: 'get'
        }).then(res=>{
            dispatch(getCaroursel(res.data));
        })
    }
}
