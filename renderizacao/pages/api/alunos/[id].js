import { getDomainLocale } from "next/dist/shared/lib/router/router";

export default function handler(req, resp) {
    const id = +req.query.id
    resp.status(200).json({
        id: id,
        nome: `Felipe ${id}`,
        email: `felipe.silva${id}@gmail.com`
    })
}