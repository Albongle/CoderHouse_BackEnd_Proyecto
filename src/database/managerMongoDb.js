import logs from "../modules/logger/logger.js";
class ManagerMongoDb{
    #model;
    constructor(model){


        this.#model= model;
    }

    async addElements(elements)
    {

        const response = await this.#model.create(elements);  
        logs.getLogger().info(`items were added`);
        return response;
    }

    async getAllElements()
    {
        return await this.#model.find();
    }

    async getElementsById(id)
    {

        return await this.#model.findOne({id:id});
    
    }
    async getOneElementByFilter(filter)
    {

        return await this.#model.findOne(filter);
    
    }
    async getElementsByFilter(filter)
    {

        return await this.#model.find(filter);
    
    }

    async updateElementsById(id,element)
    {
        return await this.#model.findOneAndUpdate({id:id},element);
    }
    async deleteElementById(id)
    {
       return await this.#model.findOneAndDelete({id:id});
    }

}

export default ManagerMongoDb;