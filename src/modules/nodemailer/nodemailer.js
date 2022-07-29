import createTransport from "nodemailer";
import logs from "../logger/logger.js"
import { EMAIL_ADMIN, EMAIL_ADMIN_PASSWORD } from "../../config/config.js";


const transporter = createTransport.createTransport({
    service:"gmail",
    port:587,
    auth:{
        user:EMAIL_ADMIN ,
        pass:EMAIL_ADMIN_PASSWORD
    }
});


async function sendEmail(to,subject, messageHtml){
    try{
        const info = await transporter.sendMail({
            from:EMAIL_ADMIN,
            to:to,
            subject:subject,
            html:messageHtml
        });
        logs.getLogger().info(`mail enviado ${info}}`);

    }
    catch(error){
        logs.getLogger("error").error(`error al enviar un mail ${error}`);
    }
}

export {sendEmail};

