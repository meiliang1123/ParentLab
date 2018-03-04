
import {SET_DATA} from "../actionTypes"

import {AsyncStorage} from "react-native"



export const initActivePageData = ()=> async (dispatch) =>{

    try {

        let data = await AsyncStorage.getItem('@ParentLab:activePageData');
        data = JSON.parse(data)
        if (data !== null && data.date == (new Date).toDateString()){


            dispatch({type:SET_DATA,data})
        } else {

            fetch("https://plgaia-staging.herokuapp.com/api/v1/post_get_active/4Wa0y74X1mAKKIo2qgiWii",
                {
                    headers:{
                        'authorization': 'Token token=ZVKgYbjoOxoM9fvuhDvQOAtt',
                        'content-type':'application/json'
                    }
                }
            )
                .then(resp=>{
                    return(resp.json())
                })
            .then((data)=>{

                dispatch({type:SET_DATA,data})
                data.date = (new Date).toDateString()
                AsyncStorage.setItem('@ParentLab:activePageData',JSON.stringify(data));
            }).catch(e=>{
                alert(e)
            })
        }

    } catch (error) {
        alert(JSON.stringify(error) )
        // Error retrieving data
    }


}