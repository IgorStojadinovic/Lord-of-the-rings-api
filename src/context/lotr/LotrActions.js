import axios from "axios";

const LOTR_API_URL = process.env.REACT_APP_LOTR_API_URL;
const LOTR_API_TOKEN = process.env.REACT_APP_LOTR_API_TOKEN;

const lotr = axios.create({
  baseURL: LOTR_API_URL,
  headers: { Authorization: `Bearer ${LOTR_API_TOKEN}` },
});

// Get Characters using Fetch
export const getCharacter = async (text) => {
  try {
    const response = await fetch(
      `https://the-one-api.dev/v2/character?name=${text}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOTR_API_TOKEN}`,
        },
      }
    );
    const character = await response.json();
    //console.log(character.docs);
    return character.docs;
  } catch (error) {
    console.error(error);
  }
};

export const getCharacters = async () => {
  try {
    //postavi limit na 100
    const response = await lotr.get(`/character?limit=100`);
    // console.log(response);
    return response.data.docs;
  } catch (error) {
    console.error(error);
  }
};

export const getQuotes = async () => {
  try {
    const response = await lotr.get(`/quote?limit=100`);
    return response.data.docs;
  } catch (error) {
    console.error(error);
  }
};

export const getQuote = async (id) => {
  try {
    const response = await lotr.get(`/qoute/${id}`);
    //console.log(response);
    return response.data.docs;
  } catch (error) {
    console.error(error);
  }
};

export const getMovie = async (id) => {
  try {
    const response = await lotr.get(`/movie/${id}`);
    // console.log(response);
    return response.data.docs;
  } catch (error) {
    console.error(error);
  }
};

export const getCharacterByID = async (id) => {
  try {
    const response = await lotr.get(`/character/${id}`);
    // console.log(response);
    return response.data.docs;
  } catch (error) {
    console.error(error);
  }
};
