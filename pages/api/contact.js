// Librairie
import sgMail from "@sendgrid/mail";

export default function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).json({ message: "INVALID_METHOD" });
		return;
	}

	// Variables
	const { prenom, nom, mail, telephone, contenu } = req.body;

	if (!prenom || !nom || !mail || !telephone || !contenu) {
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
        html: `<p>Salut ${prenom}, <br><br>
		Nous avons bien pris note de ta demande.<br>
		Nous reviendrons vers toi sous 48h.<br><br>
		Si tu n'as pas de retour, n'hésites pas à nous contacter au +33 6 67 93 46 58<br>
		Dans l'attente de te rencontrez, tu peux  nous communiquer toutes informations utiles par e-mail à l'adresse : contact@pixelway.fr<br><br>
		Toute l'équipe de Pixelway te remercie pour ta confiance.<br><br>
		Cordialement,<br><br>
		L'équipe Pixelway
		</p>`
	};

	const sendGridMailPixelway = {
		to: 'contact@pixelway.fr',
		from: "contact@pixelway.fr",
		subject: `Nouveau prospect`,
        html: `	<p>
					Prénom: ${prenom}<br>
					Nom: ${nom}<br>
					Mail: <a href=mailto(${mail})>${mail}</a><br>
					Téléphone: ${telephone}<br>
					Message: ${contenu}				 
				</p>`
	};

	// SendGrid
	(async () => {
		try {
			await sgMail.send([sendGridMailPixelway,sendGridMailClient])
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