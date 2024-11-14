import { loadServer } from "@/api/apiConfig";
import axios from "axios";
import { closeSnackbar } from "notistack";
let isLoaded = false;

export const loadInitialServer = async () => {
  if (isLoaded) return; // Prevent multiple calls
  isLoaded = true;
  try {
    const locationData = await fetchUserLocation();
    await loadServer({ location: locationData });
  } catch (error) {
    console.error("Error loading initial server:", error);
  }
};

export const fetchUserLocation = async () => {
  try {
    const response = await axios.get("https://get.geojs.io/v1/ip/geo.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching user location:", error);
    return null;
  }
};

export const closeToast = (snackbarId: any) => (
  <button
    style={{ color: "red" }}
    onClick={() => {
      closeSnackbar(snackbarId);
    }}
  >
    Dismiss
  </button>
);

export const clearInputs = (setInputs: any) => {
  setInputs((prevInputs: any) => {
    const inputs: { [key: string]: any } = {};
    for (const key in prevInputs) {
      inputs[key] = "";
    }
    return inputs;
  });
};

export const newSessionStorage = (key: string, item: any) => {
  sessionStorage.setItem(key, JSON.stringify(item));
};

export const useSessionStorage = (key: string) => {
  const items = sessionStorage.getItem(key);
  return items ? JSON.parse(items) : null;
};

export const deleteSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
