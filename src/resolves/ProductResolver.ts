import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  InputType,
  Int,
} from "type-graphql";
import { Product } from "../entity/Product";
import { kStringMaxLength } from "buffer";


@InputType()
class ProductInput {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  price!: number;

  @Field()
  category!: string;

  @Field()
  quantity!: number;
}

@InputType()
class UpdateProductInput{
    @Field(()=> String, {nullable:true})
    name?: string;
  
    @Field(()=> String, {nullable:true})
    description?: string;
  
    @Field(()=> Int, {nullable:true})
    price?: number;
  
    @Field(()=> String, {nullable:true})
    category?: string;
  
    @Field(()=> Int, {nullable:true})
    quantity?: number;

}


@Resolver()
export class ProductResolver {
  //Mutaciones
  @Mutation(() => Product)
  async createProduct(
    @Arg("variables", () => ProductInput) variables: ProductInput
  ) {
    return await Product.create(variables).save();
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id", () => Int) id: number) {
    await Product.delete(id);
    return true;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("id", () => Int) id: number,
    @Arg("fields", () => UpdateProductInput) fields: UpdateProductInput
  ) {
    await Product.update({id}, fields);

    return true;
  }

  //querys------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  @Query(() => [Product]) // Especifica que el tipo de retorno es un array de Product
  async Products() {
    return Product.find();
  }
}
