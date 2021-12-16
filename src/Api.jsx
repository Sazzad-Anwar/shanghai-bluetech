import axios from 'axios';

// api to get the sliders of homepage
export const getSliders = async (pageName) => {
    try {
        const { data } = await axios.get(`/banners?filters[pageName][$eq]=${pageName}&&populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}
// api to get marketing images
export const getMarketingImage = async () => {
    try {
        const { data } = await axios.get(`/marketing-images?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}
// api to get bullet cards
export const getBulletCard = async () => {
    try {
        const { data } = await axios.get(`/bullet-cards?populate=*`);
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