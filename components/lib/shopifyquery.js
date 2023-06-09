// export async function Storefront(query, variables = {}) {
//     const response = await fetch(process.env.SHOPIFY_STORE_API_URL, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//             'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
//         },
//         body: JSON.stringify({ query, variables }),
//     })
//     // return response.json()
//     console.log(response.json())
//     return (<p>hi, i am from shopify query.</p>)
// }



export async function ShopifyFetch(query) {
    const response = await fetch(process.env.SHOPIFY_STORE_API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({query: query}),
    })
    console.log(response.json())
    return response.json()
}



    


     