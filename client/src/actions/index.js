
import * as api from '../api/index'


export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({ type: 'AUTH', data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: 'AUTH', data });

    router('/');
  } catch (error) {
    console.log(error);
  }
}

export const createCampaign=(campaign)=>async (dispatch)=>{
    try {
      
      const {campaign}=await api.createCampaign(campaign);
      
      dispatch({type:'createCampaign',campaign});
      console.log("Campaign created")

  } catch (error) {

    console.log(error)

  }



}