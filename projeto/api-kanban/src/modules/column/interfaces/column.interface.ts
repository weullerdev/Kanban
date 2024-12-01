import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IColumn {
  @Field(() => ID)
  id: number
  
  @Field()
  description: string

  @Field()
  sequence: number;

  @Field()
  deleted: boolean
}