import axios from "axios";

const URL = process.env.URL;

export const postNewPublic = async (form) => {
  try {
    const response = await axios.post(URL, form);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud POST:", error);
    throw error;
  }
};
