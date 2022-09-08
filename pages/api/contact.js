// Librairie
import sgMail from "@sendgrid/mail";

export default function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).json({ message: "INVALID_METHOD" });
		return;
	}

	// Variables
	const { nom, mail, telephone, contenu } = req.body;

	if (!nom || !mail || !telephone || !contenu) {
		res.status(400).json({ message: "INVALID_PARAMETER" });
		return;
	}

	// Syntaxe adresse email
	const pattern =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!pattern.test(mail)) {
		res.status(400).send({
			message: "EMAIL_SYNTAX_INCORRECT",
		});
		return;
	}

	// Transformer les retours à la ligne pour le HTML
	const message = contenu
		.replace(/\n/g, "<br>")
		.replace(/\r/g, "<br>")
		.replace(/\t/g, "<br>")
		.replace(/<(?!br\s*\/?)[^>]+>/g, ""); // supprime tout le html en autorisant uniquement les balises <br>

	// Donner la clé API
	sgMail.setApiKey(process.env.KEY_SENDGRID);

	// Création du message
	const sendGridMailClient = {
		to: mail,
		from: "contact@pixelway.fr",
		subject: `Mail de confirmation - Pixelway`,
        html: `<p>Salut ${nom}, <br><br>Ta demande a bien été prise en compte. Nous reviendrons vers toi le plus rapidement possible.</p>`
	};

	const sendGridMailPixelway = {
		to: 'contact@pixelway.fr',
		from: "contact@pixelway.fr",
		subject: `Nouveau prospect`,
        html: `	<p>
					Nom: ${nom}<br>
					Mail: <a href=mailto(${mail})>${mail}</a><br>
					Téléphone: ${telephone}<br>
					Message: ${contenu}				 
				</p>`
	};

	// SendGrid
	(async () => {
		try {
			await sgMail.send(sendGridMailClient);
			sgMail.send(sendGridMailPixelway);
			res.status(200).json({
				message: "EMAIL_SENDED_SUCCESSFULLY",
			});
		} catch {
			res.status(500).json({
				message: "ERROR_WITH_SENDGRID",
			});
			return;
		}
	})();
}