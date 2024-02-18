import axios from "axios";
export async function getBanners() {
  try {
    const response = await axios.get(
      "https://api.testvalley.kr/main-banner/all"
    );

    if (response.status) return response;
  } catch (error) {
    console.log("hello");
  }
}

export async function getCategory() {
  try {
    const response = await axios.get(
      "https://api.testvalley.kr/main-shortcut/all"
    );

    if (response.status) return response;
  } catch (error) {
    console.log("hello");
  }
}

export async function getArrangedDiscounts() {
  try {
    const response = await axios.get(
      "https://api.testvalley.kr/collections?prearrangedDiscount"
    );

    if (response.status) return response;
  } catch (error) {
    console.log("hello");
  }
}
