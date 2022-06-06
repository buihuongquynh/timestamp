import ProductRepository from "./entity/productRepository";
const repositories={
    'api' : ProductRepository,
}
export const RepositoryFactory = {
    get: name=>repositories[name]
}
