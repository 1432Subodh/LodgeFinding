
import {Resend} from 'resend'
import bcryptjs from 'bcryptjs'
import userSchema from '../../models/UserModel';


const sendingEmail = async({emailType,hashedToken, email}:any)=>{

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: `${process.env.EMAIL|| 'subodh14329@gmail.com'}`,
        subject: 'Hello World',
        html: `<strong>${emailType} of ${email}</strong>`,
      });
      console.log(data)
      if(error){
        console.log(error)
      }
}

export const resendEmail = async({emailType, userId,email}:any)=>{
    try {

         const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        console.log(hashedToken)
        switch (emailType) {
            case 'USER_VERIFY':
                const user = await userSchema.findOne({email})
                user.verificationToken = hashedToken
                user.verificationTokenExpired = Date.now() + 36000000
                await user.save()
                await sendingEmail({emailType:'USER_VERIFY', hashedToken:hashedToken, email:email})
                
                break;
        
            default:
                break;
        }


        



    } catch (error) {
        console.log(error)
    }
    
      
    
      
}