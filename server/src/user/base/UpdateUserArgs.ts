/*
------------------------------------------------------------------------------ 
This code was generated by YSsystems. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.yssystems.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";

@ArgsType()
class UpdateUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
  @Field(() => UserUpdateInput, { nullable: false })
  data!: UserUpdateInput;
}

export { UpdateUserArgs as UpdateUserArgs };
