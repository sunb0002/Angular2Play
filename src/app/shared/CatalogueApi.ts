import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models from './model/models';
import { BASE_PATH, COLLECTION_FORMATS } from './variables';
import { Configuration } from './configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class CatalogueApi {
    protected basePath = 'https://jsonplaceholder.typicode.com';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        console.log('*******CatalogueApi Inject basePath=====', basePath);
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * GetCatalogueCategories
     * Get catalogue categories
     */
    public getCatalogueCategoriesUsingGET(extraHttpRequestParams?: any): Observable<any> {
        return this.getCatalogueCategoriesUsingGETWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * GetCatalogueCategories
     * Get catalogue categories
     */
    public getCatalogueCategoriesUsingGETWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/posts/3';
        console.log('*******CatalogueApi complete Path=====', path);

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }


    /**
     * UpdateProfile
     * Update User Profile
     * @param requestParams requestParams
     */
    public updateProfileUsingPOST(requestParams: models.UpdateProfileRequest, extraHttpRequestParams?: any): Observable<models.UpdateProfileResponse> {

        console.log('******Posting requestParams', requestParams);
        return this.updateProfileUsingPOSTWithHttpInfo(requestParams, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * UpdateProfile
     * Update User Profile
     * @param requestParams requestParams
     */
    public updateProfileUsingPOSTWithHttpInfo(requestParams: models.UpdateProfileRequest, extraHttpRequestParams?: any): Observable<Response> {
        // const path = this.basePath + './assets/post-data.json';
        const path = 'http://localhost:8080/mha-emart/serviceman/profile';


        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestParams' is not null or undefined
        if (requestParams === null || requestParams === undefined) {
            throw new Error('Required parameter requestParams was null or undefined when calling updateProfileUsingPOST.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: requestParams == null ? '' : JSON.stringify(requestParams), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials: true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
