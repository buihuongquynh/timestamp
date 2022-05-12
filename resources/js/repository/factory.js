import ProductRepository from "./entity/productRepository";
const repositories={
    'list' : ProductRepository,
}
export const RepositoryFactory = {
    get: name=>repositories[name]
}
