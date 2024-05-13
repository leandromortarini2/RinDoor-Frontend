import axios from "axios";

// const CATEGORY_URL = process.env.CATEGORY_URL;

export const getCategory = async () => {
  try {
    // Realizar la solicitud GET a la URL especificada
    const response = await axios.get(
      "https://rindoor-backend.onrender.com/category"
    );

    // Devolver los datos de la respuesta
    return response.data;
  } catch (error) {
    // Capturar y manejar errores en caso de que ocurran
    console.error("Error al enviar la solicitud GET:", error);
    throw error;
  }
};
