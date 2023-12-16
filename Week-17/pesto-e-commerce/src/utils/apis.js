import axios from "axios";

export const getProducts = async (
  limit = 10,
  skip = 0,
  select = [
    "id",
    "title",
    "price",
    "discountPercentage",
    "rating",
    "brand",
    "category",
    "thumbnail"
  ]
) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select.join(
        ","
      )}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/categories`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategoryProducts = async (category, limit = 100) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSearchResults = async (keyword) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${keyword}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postToCart = async (data) => {
  try {
    const response = await axios.post(`https://dummyjson.com/carts/add`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCart = async (cartId, products) => {
  try {
    const response = await axios.put(`https://dummyjson.com/carts/${cartId}`, {
      products
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogin = async (data) => {
  try {
    const response = await axios.post(`https://dummyjson.com/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCart = async (userId) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/carts/user/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
