import axios from "axios";

export type StrapiPromocode = {
  id: number;
  code: string;
  discount: number;
  expireDate: string;
};

class StrapiService {
  readonly #baseUrl: string;
  #token: string;
  readonly #auth: { email: string; password: string };
  #refreshAttempts: number;
  #tokenUpdating: boolean;

  constructor() {
    const STRAPI_URL_DEV = "https://dev-api-4ug6sq9h.elbrusboot.camp";
    const STRAPI_LOGIN_DEV = "alexander.knyazev@elbrusboot.camp";

    this.#baseUrl = process.env.STRAPI_URL || STRAPI_URL_DEV;
    this.#auth = {
      email: process.env.STRAPI_LOGIN || STRAPI_LOGIN_DEV,
      password: process.env.STRAPI_PASSWORD || "123",
    };
    this.#token = "";
    this.#tokenUpdating = false;
    this.#refreshAttempts = 0;
    this.updateToken();
    setInterval(() => this.updateToken(), 1000 * 60 * 60);
  }

  private async waitForTokenUpdate<T>(fn: () => Promise<T>): Promise<T> {
    if (this.#tokenUpdating) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    return fn();
  }

  async updateToken(): Promise<void> {
    console.debug("Updating token");
    this.#tokenUpdating = true;
    try {
      const response = await axios.post(
        `${this.#baseUrl}/admin/login`,
        this.#auth
      );
      this.#token = response.data.data.token;
      this.#refreshAttempts = 0;
    } catch (error) {
      if (this.#refreshAttempts < 3) {
        this.#refreshAttempts++;
        return this.updateToken();
      } else {
        console.error(error);
        console.error("Failed to update token");
        throw error;
      }
    } finally {
      this.#tokenUpdating = false;
    }
  }

  async getCourses(): Promise<{ productName: string; id: number }[]> {
    const response = await axios.get(`${this.#baseUrl}/courses`, {
      headers: {
        Authorization: `Bearer ${this.#token}`,
      },
    });
    return response.data;
  }

  async getPromocodes(): Promise<StrapiPromocode[]> {
    return this.waitForTokenUpdate(async () => {
      const response = await axios.get(`${this.#baseUrl}/promocodes`, {
        headers: {
          Authorization: `Bearer ${this.#token}`,
        },
      });
      return response.data;
    });
  }

  async checkPromocode(
    promocode: string
  ): Promise<{ success: boolean; discount: number; newPrice: number }> {
    return this.waitForTokenUpdate(async () => {
      const response = await axios.get<StrapiPromocode[]>(
        `${this.#baseUrl}/promocodes?code=${promocode}`,
        {
          headers: {
            Authorization: `Bearer ${this.#token}`,
          },
        }
      );

      const foundPromocode = response.data[0];

      let discount = 0;
      const basePrice = 109500;
      let newPrice = basePrice;
      if (promocode === "AI15") {
        discount = 15;
        newPrice = Math.floor(basePrice * (1 - discount / 100));
      } else if (foundPromocode && foundPromocode.discount >= 50) {
        discount = 25;
        newPrice = Math.floor(basePrice * (1 - discount / 100));
      }

      return {
        success: newPrice !== basePrice,
        discount,
        newPrice,
      };
    });
  }
}

const strapiService = new StrapiService();

export default strapiService;
