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
import type {
  CreateCouponDto,
} from '../models';
import {
    CreateCouponDtoFromJSON,
    CreateCouponDtoToJSON,
} from '../models';

export interface CouponsControllerCreateRequest {
    createCouponDto: CreateCouponDto;
}

/**
 * 
 */
export class CouponsApi extends runtime.BaseAPI {

    /**
     */
    async couponsControllerCreateRaw(requestParameters: CouponsControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createCouponDto === null || requestParameters.createCouponDto === undefined) {
            throw new runtime.RequiredError('createCouponDto','Required parameter requestParameters.createCouponDto was null or undefined when calling couponsControllerCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/coupons`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCouponDtoToJSON(requestParameters.createCouponDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async couponsControllerCreate(requestParameters: CouponsControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.couponsControllerCreateRaw(requestParameters, initOverrides);
    }

}
