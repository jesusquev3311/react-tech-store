const URL = process.env.REACT_APP_MAIN_URL;

export const getAll = async () => {
    let products = [];

    const productsData =   await fetch(URL, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
    .then(resp => resp.json());

    return productsData;    
};