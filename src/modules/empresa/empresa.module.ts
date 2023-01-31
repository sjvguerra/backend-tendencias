import { Global, Module } from "@nestjs/common";
import { empresaProviders } from "./providers/empresa.providers";

// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...empresaProviders
        ],
    })

    export class EmpresaModule{

    }