export class DocenteModel {
   constructor(
      private id: string,
      private nome: string,
      private email: string,
      private data_nasc: Date,
      private turma_id: string
   ) {
         this.id = id,
         this.nome = nome,
         this.email = email,
         this.data_nasc = data_nasc,
         this.turma_id = turma_id
   }
   public getId(): string{
      return this.id
   }
   public getNome(): string{
      return this.nome
   }
   public getEmail(): string{
      return this.email
   }
   public getDataNasc(): Date{
      return this.data_nasc
   }
   public getTurmaId(): string{
      return this.turma_id
   }
};