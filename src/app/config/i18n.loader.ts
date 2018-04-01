import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export class I18nLoader {
}

// export function HttpLoaderFactory(http: HttpClient) {
//     return new TranslateHttpLoader(http);
// }

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};
