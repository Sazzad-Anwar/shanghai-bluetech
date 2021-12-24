import axios from 'axios';
let URL = 'https://shbluetech-api.herokuapp.com/api'

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

export const getNewModelProducts = async (filtration) => {
    try {
        console.log(filtration)
        const { data } = await axios.get(`${URL}/products?populate=*&filters[${filtration}][$eq]=true&sort[1]=id`);
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

export const getMetaTags = async () => {
    try {
        const { data } = await axios.get(`${URL}/meta-tags`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getServices = async () => {
    try {
        const { data } = await axios.get(`${URL}/services?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getContacts = async () => {
    try {
        const { data } = await axios.get(`${URL}/contacts?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const servicePageSection = async () => {
    try {
        const { data } = await axios.get(`${URL}/service-page?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const contactUsSection = async () => {
    try {
        const { data } = await axios.get(`${URL}/contact-us?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getCompanyDescription = async () => {
    try {
        const { data } = await axios.get(`${URL}/company-descriptions?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getCompanyProfile = async () => {
    try {
        const { data } = await axios.get(`${URL}/profiles?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getCompanyTimeline = async () => {
    try {
        const { data } = await axios.get(`${URL}/timelines?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getWorkingProcess = async () => {
    try {
        const { data } = await axios.get(`${URL}/working-processes?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getWorkingSteps = async () => {
    try {
        const { data } = await axios.get(`${URL}/working-steps?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getPartners = async () => {
    try {
        const { data } = await axios.get(`${URL}/partners?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const getCertificates = async () => {
    try {
        const { data } = await axios.get(`${URL}/certificates?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const aboutUsSection = async () => {
    try {
        const { data } = await axios.get(`${URL}/about-us?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const privacyPolicy = async () => {
    try {
        const { data } = await axios.get(`${URL}/privacy-policy?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const termsCondition = async () => {
    try {
        const { data } = await axios.get(`${URL}/terms-condition?populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
}

export const categoryProducts = async (category) => {
    try {
        const { data } = await axios.get(`${URL}/caetgories?populate[products][populate][0]=images&filters[link]=${category}`);
        return data;
    } catch (error) {
        return error.message
    }
};

export const getProductDetails = async (code) => {
    try {
        const { data } = await axios.get(`${URL}/products?filters[code][$eq]=${code}&populate=*`);
        return data;
    } catch (error) {
        return error.message
    }
};