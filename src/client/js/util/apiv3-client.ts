import axios from 'axios';
import * as urljoin from 'url-join';

import apiv3ErrorHandler from './apiv3ErrorHandler';

const apiv3Root = '/_api/v3';

export async function apiv3Request(method: string, path: string, params: any): Promise<any> {
  try {
    const opts = {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
      },
    };
    const res = await axios[method](urljoin(apiv3Root, path), params, opts);
    return res.data;
  }
  catch (err) {
    const errors = apiv3ErrorHandler(err);
    throw errors;
  }
}

export async function apiv3Get(path: string, params: any = {}): Promise<any> {
  return apiv3Request('get', path, { params });
}

export async function apiv3Post(path: string, params: any = {}): Promise<any> {
  return apiv3Request('post', path, params);
}

export async function apiv3Put(path: string, params: any = {}): Promise<any> {
  return apiv3Request('put', path, params);
}

export async function apiv3Delete(path: string, params: any = {}): Promise<any> {
  return apiv3Request('delete', path, { params });
}
