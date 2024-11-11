export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const nome = searchParams.get('nome')
    const idade = searchParams.get('idade')

    const data = {
        title: 'Clients API',
        nome: nome,
        idade: +idade
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}