import { EmpresaEntity } from "src/modules/empresa/entities/empresa.entity";
import { ProductEntity } from "src/modules/sales/entities";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

export class EmpresaEntity{

    @PrimaryGeneratedColumn('uuid')
    id:number;
    
    @CreateDateColumn({
        name:'created_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;
    @UpdateDateColumn({
        name:'updated_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP', 
    })
    updatedAt: Date;
    @DeleteDateColumn({
        name:'deleted_date',
        type:'timestamptz',
        nullable : true,
    })
    deletedAt:Date;
    
    //Relationship    
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
    // category: CategoryEntity;
    
    @Column('varchar', {
    name:'name',
    unique:true,
    comment: 'Nombre de la Empresa',
    })
    name:string;

    @Column('date', {
        name:'fechaCreacionEmpresa',
        unique:true,
        comment: 'Fecha de fundacion de la empresa',
        })
        fechaCreacionEmpresa:string;   
        

    @Column('varchar', {
        name:'nacionalidad',
        unique:true,
        comment: 'Nacionalidad del cantante',
        })
        nacionalidad:string; 
    //Relationship   
     // Relaciones de uno a muchos
    @OneToMany(() => EmpresaEntity , (empresa) => empresa.empleado)
    empresas: EmpresaEntity[]

    // Relaciones de muchos a uno
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
    // category: CategoryEntity;
    
    /*@Column('boolean',{
    name:'state',
    })
    state:boolean;
    @Column('enum', {
    name:'language',
    enum:languageTypeEnum,
    })
    language:LanguageTypeEnum;*/
    
    //completar
    
    @BeforeInsert()
    @BeforeUpdate()
    async setName(){
    if(!this.name){
        return;
    }
    this.name = this.name.toUpperCase();
    }
    /*setEmail(){
    if(!this.email){
    return;
    }
    this.email = this.email.toLowerCase().trim();
    
    async hashPassword(){
    if(!this.password){
        return;
    }
    this.password = await Bcrypt.hash(this.password, 12);
    }*/
    
    }