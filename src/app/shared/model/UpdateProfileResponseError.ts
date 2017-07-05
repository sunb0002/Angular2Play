/**
 * MHA eMART eService API
 * An application program interface that allows users or systems to interact with eMART API services
 *
 * OpenAPI spec version: 1.0.0
 * Contact: xuelei.lu@ufinity.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * Error object definition. It will be used in an error response
 */
export interface UpdateProfileResponseError {
    /**
     * Backend error code
     */
    code: string;

    /**
     * Object containing detailed information for the error
     */
    source?: models.AbstractResponseErrorSource;

    /**
     * Error message that should be displayed on the front-end
     */
    title: string;

}