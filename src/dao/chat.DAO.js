import ManagerMongoDb from "../database/managerMongoDb.js";
import ChatModel from "../models/schemas/chat.Schema.js"

class ChatDAO extends ManagerMongoDb{
    constructor()
    {
        super(ChatModel);
    }
}

export default ChatDAO;