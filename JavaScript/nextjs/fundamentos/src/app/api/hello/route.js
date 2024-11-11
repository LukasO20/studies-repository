export async function GET(request) {
    const data = {
        name: 'Teste API',
        message: 'Bem-vindo à API Hello',
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}