const URL = process.env.REACT_APP_MAIN_URL;

export const getAll = async () => {

    const productsData =   await fetch(`${URL}/product`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })

    return productsData;    
};

export const getOne = async (id) => {

    const productData =   await fetch(`${URL}/product/${id}`, {
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
            'Accept': 'application/json',
            "content-type": "application/json",
        },
        body: JSON.stringify(item),
    })

    return productData;    
}