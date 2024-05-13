import axios from "axios";

const JOBS_URL = process.env.JOBS_URL;

export const postNewPublic = async (State) => {
  try {
    const response = await axios.post(
      "https://rindoor-backend.onrender.com/jobs",
      State
    );

    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud POST:", error);
    throw error;
  }
};
