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

    const productData =   await fetch(`${URL}/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })

    return productData;    
};

export const addToCart = async (item) => {
    const productData =   await fetch(`${URL}/cart`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: item,
    })

    return productData;    
}