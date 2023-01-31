import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { ProductEntity } from '../../sales/entities';
import { RepositoryEnum } from 'src/shared/enums';
import { EmpleadoEntity } from '../entities/empleado.entity';
import { EmpresaEntity } from 'src/modules/empresa/entities/empresa.entity';

export const empleadoProviders = [
  {
    provide: RepositoryEnum.EMPLEADO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EmpleadoEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.EMPRESA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EmpresaEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]