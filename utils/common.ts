import camelcaseKeys from 'camelcase-keys';
import { API } from '~/utils/ApiUrl';

export const svgToBase64 = (svg: Node) => {
  const serializedSVG = new XMLSerializer().serializeToString(svg);
  const base64Data = window.btoa(serializedSVG);
  return `data:image/svg+xml;base64,${base64Data}`;
};

export const getApi = (api: API, obj: object) => {
  const entries = Object.entries(obj);
  if (!entries.length) return;
  let parsed = api as String;
  entries.forEach((entry: [string, string]) => {
    const regex = new RegExp(`{${entry[0]}}`, 'g');
    parsed = parsed.replace(regex, entry[1]);
  });
  return parsed as string;
};

export const initModel = (target: any, data: any) => {
  if (!data || !target) return;
  for (const k in data) {
    const key = k as string;
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = data[key];
    }
  }
};
