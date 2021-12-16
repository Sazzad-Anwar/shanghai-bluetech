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
        const { data } = await axios.get(`/testimonials?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}