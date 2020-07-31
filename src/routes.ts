import express from 'express'
import data from './data'
const routes = express.Router()

routes.get('/', (req, res) => {
	res.send(`
		<div>
			<p>Essa API é apenas um teste para o uso da API do serviço <a href="https://developers.sympla.com.br/api-doc/index.html" target="_blank">Sympla</a> e <strong>não deve ser utilizada em produção!</strong></p>
		<div>
		<br/><br/>
		<table>
			<thead><tr><th>Endpoint</th><th>Resultado</th></tr></thead>
			<tbody>
				<tr><td>/events</td><td>Retorna todos os eventos disponíveis</td></tr>
				<tr><td>/events/:id</td><td>Retorna o evento relacionado a um ID específico</td></tr>
			</tbody>
		</table>
		<br/><br/>
		<div>
			<p><strong>IMPORTANTE!</strong></p>
			<p>
				Para o uso da API é necessário o envio da chave <strong>s_token</strong> no header da chamada. Não é necessário que seja um token real,
				apenas basta que o valor não esteja vazio.
			</p>
		</div>
	`)
})

routes.get('/events', (req, res) => {
	if (req.get('s_token') !== undefined) {
		return res.json(data.sympla)
	}
	return res.json({erro: 'Token não enviado'})
})

routes.get('/events/:id', (req, res) => {
	if (req.get('s_token') !== undefined) {
		const event = data.sympla.data.filter((e: any) => e.id === +req.params.id)
		return res.json(event);
	}
	return res.json({erro: 'Token não enviado'})
})

export default routes
