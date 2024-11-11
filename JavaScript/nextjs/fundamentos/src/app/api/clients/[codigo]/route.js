export async function GET(request, { params }) {
    const { codigo } = params
    //const codigo = searchParams.get('codigo')

    const data = {
        title: 'Clients API',
        nome: `Mary ${codigo}`,
        email: `marymary${codigo}@xfcmail.com`
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}