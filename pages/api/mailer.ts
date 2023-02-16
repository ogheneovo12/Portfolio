import { IContactEmail } from '@/common/types/interfaces';
import { getEmailTemplate } from '@/common/utils/getEmailTemplate';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from 'services/mail.service';

async function mailer(req: NextApiRequest, res: NextApiResponse) {
    const contactEmail: IContactEmail = req.body;
    try {
        await sendEmail(`${contactEmail?.subject}`, getEmailTemplate(contactEmail), contactEmail?.email);
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: '' });
}

export default mailer;
