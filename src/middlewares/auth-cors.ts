import { cors } from "hono/cors";

export default cors({
    origin: ['http://localhost:3000',"https://localhost:4001","https://ai-api.nosion.ac.cn","https://192.168.2.118:4001","https://ai.buycoffee.top"],
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
})