import { loadServer } from "@/api/apiConfig";
import axios from "axios";
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
