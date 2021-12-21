import axios from 'axios';
let URL = 'https://shbluetech-api.herokuapp.com/api'

// api to get the sliders of homepage
export const getSliders = async (pageName) => {
    try {
        const { data } = await axios.get(`${URL}/banners?filters[pageName][$eq]=${pageName}&&populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}
// api to get marketing images
export const getMarketingImage = async () => {
    try {
        const { data } = await axios.get(`${URL}/marketing-images?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}
// api to get bullet cards
export const getBulletCard = async () => {
    try {
        const { data } = await axios.get(`${URL}/bullet-cards?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}
// api to get testimonials
export const getTestimonials = async () => {
    try {
        const { data } = await axios.get(`${URL}/testimonials?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}
// api to get homepage sections
export const getHomePageSections = async () => {
    try {
        const { data } = await axios.get(`${URL}/home-page?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

//api to get categories 
export const getCategories = async () => {
    try {
        const { data } = await axios.get(`${URL}/caetgories?populate[products][populate][0]=images`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getLatestFilters = async () => {
    try {
        const { data } = await axios.get(`${URL}/caetgories?populate[products][populate][0]=images&filters[name]=Filter%20Cartridges`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getNewModelProducts = async () => {
    try {
        const { data } = await axios.get(`${URL}/products?populate=*&filters[newModel][$eq]=true&sort[1]=id`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getCompanyAddress = async () => {
    try {
        const { data } = await axios.get(`${URL}/company-addresses`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const sendMsg = async (postData) => {
    try {
        const { data } = await axios.post(`${URL}/messages`, { data: postData });
        return data;
    } catch (error) {
        return error.message
    }
}