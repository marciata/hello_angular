import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module'
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

// esse é um arquivo ts que indica qual modulo sera carregado primeiro pelo loader