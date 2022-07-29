import logs from "../modules/logger/logger.js";

export function routedNotImplemented(req,res,_next){
    logs.getLogger("warn").warn({ruta:req.path, metodo:req.method});
    res.status(404).json({status:"error",code:404, message:`ruta método ${req.method} no implementada`});
}