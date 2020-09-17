import { NuxtAxiosInstance } from '@nuxtjs/axios';

// eslint-disable-next-line
let $axios: NuxtAxiosInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance): void {
  $axios = axiosInstance;
}

export { $axios };
