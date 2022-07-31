import os from "os";
class InfoService{

    static getInfoOfSystem()
    {
        return {
            carpeta_proyecto:process.cwd(),
            path_ejecucion:process.execPath,
            plataforma:process.platform,
            version_node:process.version,
            process_id:process.pid,
            memoria_total:process.memoryUsage().rss,
            procesadores_presentes:os.cpus().length,
        };
    }

}

export default InfoService;