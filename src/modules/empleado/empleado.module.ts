import { Global, Module } from "@nestjs/common";
import { empleadoProviders } from "./providers/empleado.providers";
// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...empleadoProviders
        ],
    })

    export class EmpleadoModule{

    }