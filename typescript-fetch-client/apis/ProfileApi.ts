/* tslint:disable */
/* eslint-disable */
/**
 * Cats example
 * The cats API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

/**
 * 
 */
export class ProfileApi extends runtime.BaseAPI {

    /**
     */
    async appControllerGetProfileRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/profile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appControllerGetProfile(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appControllerGetProfileRaw(initOverrides);
    }

}
