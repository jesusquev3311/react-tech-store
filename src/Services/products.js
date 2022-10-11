const URL = process.env.REACT_APP_MAIN_URL;

export const getAll = async () => {

    const productsData =   await fetch(URL, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })

    return productsData;    
};

export const getOne = async (id) => {

    const productData =   await fetch(`${URL}${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })

    return productData;    
};