import { DataSource } from 'typeorm';



// import { RequirementRequestEntity } from '../entities/requirement-request.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { RepositoryEnum } from 'src/shared/enums';
import { EmpleadoEntity } from 'src/modules/empleado/entities/empleado.entity';
import { EmpresaEntity } from '../entities/empresa.entity';

export const cantanteProviders = [
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