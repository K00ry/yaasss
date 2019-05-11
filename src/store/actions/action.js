import axios from "axios";


export const initPass = val =>{
        return {type:'INIT', value:val};
};

export const initFetch = () =>{
    return dispatch => {
        const url = "https://yaasss-cms.herokuapp.com/music";
        // const localUrl ="http://localhost:1337/music";
        axios.get(url).then(response =>{
            console.log(response.data);
            dispatch(initPass(response.data));
        }).catch(err =>{
            console.log(err);
        });
    }
};