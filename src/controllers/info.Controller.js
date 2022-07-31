import InfoService from "../service/info.Service.js";


class InfoController{

    static getInfoOfSystem(_req, res){
        const data = InfoService.getInfoOfSystem();
        res.render("pages/home",{data});
    }
}

export default InfoController;